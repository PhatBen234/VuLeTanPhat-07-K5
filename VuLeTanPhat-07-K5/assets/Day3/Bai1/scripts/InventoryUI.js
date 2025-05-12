cc.Class({
  extends: cc.Component,

  properties: {
    managerNode: cc.Node, // node chứa InventoryManager script
    holder: cc.Node,
    itemPrefab: cc.Prefab,

    // UI details
    previewIcon: cc.Sprite,
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    typeLabel: cc.Label,
    effectLabel: cc.Label,
    useButton: cc.Button,
    deleteButton: cc.Button,
    equipStatusLabel: cc.Label,

    // Add Item Form
    addItemForm: cc.Node,
    addItemToggleButton: cc.Button,
    addItemButton: cc.Button,
    inputName: cc.EditBox,
    inputQuantity: cc.EditBox,
    inputEffect: cc.EditBox,
    iconPreview: cc.Sprite,
    inputTypeToggleGroup: cc.ToggleContainer,

    searchBar: cc.EditBox, // EditBox cho tìm kiếm
  },

  onLoad() {
    this.manager = this.managerNode.getComponent("InventoryManager");
    this.itemList = {};
    this.selectedItem = null;

    this.initializeEventListeners();
    this.manager.loadInitialItems();
  },

  start() {
    this.setupUI();
    this.spawnAllItems();
  },

  initializeEventListeners() {
    // Tìm kiếm
    this.searchBar.node.on("editing-did-ended", this.onSearchItem, this);

    // Các sự kiện nút
    this.useButton.node.on("click", this.onUseItem, this);
    this.deleteButton.node.on("click", this.onDeleteItem, this);
    this.addItemToggleButton.node.on("click", this.toggleAddItemForm, this);
    this.addItemButton.node.on("click", this.onAddNewItem, this);
  },

  setupUI() {
    this.equipStatusLabel.node.opacity = 0;
    this.hideItemDetails();
    this.addItemForm.active = false;
  },

  spawnAllItems() {
    const items = this.manager.getAllItems();
    items.forEach((itemData) => this.spawnItem(itemData));
  },

  spawnItem(itemData) {
    const itemNode = cc.instantiate(this.itemPrefab);
    itemNode.parent = this.holder;

    const itemScript = itemNode.getComponent("Item");
    itemScript.initItem(itemData, this);

    this.itemList[itemData.key] = {
      node: itemNode,
      script: itemScript,
      data: itemData, // Lưu dữ liệu item để tìm kiếm
    };
  },

  onItemClick(itemData) {
    this.selectedItem = itemData;
    this.updateItemDetails();
  },

  updateItemDetails() {
    const { name, quantity, type, effect, icon } = this.selectedItem;

    this.previewIcon.spriteFrame = icon;
    this.nameLabel.string = name;
    this.quantityLabel.string = `Số lượng: x${quantity}`;
    this.typeLabel.string = `Loại: ${type}`;
    this.effectLabel.string = effect;

    // Hiển thị thông tin chi tiết
    this.setItemDetailVisibility(true);
  },

  setItemDetailVisibility(isVisible) {
    const opacity = isVisible ? 255 : 0;
    this.previewIcon.node.opacity = opacity;
    this.nameLabel.node.opacity = opacity;
    this.quantityLabel.node.opacity = opacity;
    this.typeLabel.node.opacity = opacity;
    this.effectLabel.node.opacity = opacity;
    this.useButton.node.active = isVisible;
    this.deleteButton.node.active = isVisible;
  },

  onUseItem() {
    if (!this.selectedItem) return;

    const { key } = this.selectedItem;
    const result = this.manager.useItem(key);

    if (!result) return;

    if (result.removed) {
      this.removeItemUI(key);
    } else {
      this.selectedItem.quantity = result.item.quantity;
      this.quantityLabel.string = `Số lượng: x${result.item.quantity}`;
      this.itemList[key].script.updateQuantity(result.item.quantity);
    }

    if (result.equipped) {
      this.showEquipStatus(`Đã trang bị: ${result.item.name}`);
    }
  },

  onDeleteItem() {
    if (!this.selectedItem) return;

    const { key } = this.selectedItem;
    const deleted = this.manager.deleteItem(key);

    if (deleted) {
      this.removeItemUI(key);
    }
  },

  removeItemUI(key) {
    const entry = this.itemList[key];
    if (entry) entry.node.destroy();
    delete this.itemList[key];
    this.selectedItem = null;
    this.hideItemDetails();
  },

  hideItemDetails() {
    this.setItemDetailVisibility(false);
    this.equipStatusLabel.node.opacity = 0;
  },

  showEquipStatus(text) {
    this.equipStatusLabel.string = text;
    this.equipStatusLabel.node.opacity = 255;
    this.equipStatusLabel.node.stopAllActions();
    this.equipStatusLabel.node.runAction(
      cc.sequence(cc.delayTime(2), cc.fadeOut(1))
    );
  },

  toggleAddItemForm() {
    this.addItemForm.active = !this.addItemForm.active;
  },

  getSelectedType() {
    const toggles = this.inputTypeToggleGroup.toggleItems;
    for (let toggle of toggles) {
      if (toggle.isChecked) {
        return toggle.node.name.toLowerCase();
      }
    }
    return null;
  },

  onAddNewItem() {
    const name = this.inputName.string.trim();
    const quantity = parseInt(this.inputQuantity.string);
    const effect = this.inputEffect.string.trim();
    const type = this.getSelectedType();
    const icon = this.iconPreview.spriteFrame;

    if (this.isItemValid(name, quantity, effect, type, icon)) {
      const key = name.toLowerCase().replace(/\s+/g, "_");
      const newItem = { key, name, quantity, type, effect, icon };

      const added = this.manager.addItem(newItem);
      if (added) {
        this.spawnItem(newItem);
        this.addItemForm.active = false;
      } else {
        console.log("[AddItem] Item đã tồn tại:", key);
      }
    } else {
      console.log("[AddItem] Thiếu dữ liệu hợp lệ");
    }
  },

  isItemValid(name, quantity, effect, type, icon) {
    return name && !isNaN(quantity) && quantity > 0 && effect && type && icon;
  },

  onSearchItem() {
    const keyword = this.searchBar.string.trim().toLowerCase();
    this.filterItems(keyword);
  },

  filterItems(keyword) {
    console.log(`Tìm kiếm với từ khóa: "${keyword}"`);

    Object.keys(this.itemList).forEach((key) => {
      const itemData = this.itemList[key].data;
      this.itemList[key].node.active = this.isItemMatchingSearch(
        itemData,
        keyword
      );
    });
  },

  isItemMatchingSearch(itemData, keyword) {
    const itemName = itemData.name.trim().toLowerCase();
    return keyword === "" || itemName.includes(keyword);
  },
});
