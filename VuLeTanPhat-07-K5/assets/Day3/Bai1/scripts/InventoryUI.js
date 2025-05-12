cc.Class({
  extends: cc.Component,

  properties: {
    managerNode: cc.Node, // node chứa InventoryManager script
    holder: cc.Node,
    itemPrefab: cc.Prefab,

    // UI detail
    previewIcon: cc.Sprite,
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    typeLabel: cc.Label,
    effectLabel: cc.Label,
    useButton: cc.Button,
    deleteButton: cc.Button,
    equipStatusLabel: cc.Label,

    // Add Form
    addItemForm: cc.Node,
    addItemToggleButton: cc.Button,
    addItemButton: cc.Button,
    inputName: cc.EditBox,
    inputQuantity: cc.EditBox,
    inputEffect: cc.EditBox,
    iconPreview: cc.Sprite,
    inputTypeToggleGroup: cc.ToggleContainer,
  },

  onLoad() {
    this.manager = this.managerNode.getComponent("InventoryManager");
    this.itemList = {};
    this.selectedItem = null;

    this.useButton.node.on("click", this.onUseItem, this);
    this.deleteButton.node.on("click", this.onDeleteItem, this);
    this.addItemToggleButton.node.on("click", this.toggleAddItemForm, this);
    this.addItemButton.node.on("click", this.onAddNewItem, this);

    this.manager.loadInitialItems();
  },

  start() {
    this.equipStatusLabel.node.opacity = 0;
    this.hideItemDetails();
    this.spawnAllItems();
    this.addItemForm.active = false;
  },

  spawnAllItems() {
    const items = this.manager.getAllItems();
    for (let itemData of items) {
      this.spawnItem(itemData);
    }
  },

  spawnItem(itemData) {
    const itemNode = cc.instantiate(this.itemPrefab);
    itemNode.parent = this.holder;

    const itemScript = itemNode.getComponent("Item");
    itemScript.initItem(itemData, this);

    this.itemList[itemData.key] = {
      node: itemNode,
      script: itemScript,
    };
  },

  onItemClick(itemData) {
    this.selectedItem = itemData;

    this.previewIcon.spriteFrame = itemData.icon;
    this.nameLabel.string = itemData.name;
    this.quantityLabel.string = `Số lượng: ${itemData.quantity}`;
    this.typeLabel.string = `Loại: ${itemData.type}`;
    this.effectLabel.string = itemData.effect;

    this.previewIcon.node.opacity = 255;
    this.nameLabel.node.opacity = 255;
    this.quantityLabel.node.opacity = 255;
    this.typeLabel.node.opacity = 255;
    this.effectLabel.node.opacity = 255;
    this.useButton.node.active = true;
    this.deleteButton.node.active = true;
  },

  onUseItem() {
    if (!this.selectedItem) return;

    const key = this.selectedItem.key;
    const result = this.manager.useItem(key);

    if (!result) return;

    if (result.removed) {
      this.removeItemUI(key);
    } else {
      this.selectedItem.quantity = result.item.quantity;
      this.quantityLabel.string = `Số lượng: ${result.item.quantity}`;
      this.itemList[key].script.updateQuantity(result.item.quantity);
    }

    if (result.equipped) {
      this.showEquipStatus(`Đã trang bị: ${result.item.name}`);
    }
  },

  onDeleteItem() {
    if (!this.selectedItem) return;
    const key = this.selectedItem.key;

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
    this.previewIcon.node.opacity = 0;
    this.nameLabel.node.opacity = 0;
    this.quantityLabel.node.opacity = 0;
    this.typeLabel.node.opacity = 0;
    this.effectLabel.node.opacity = 0;
    this.useButton.node.active = false;
    this.deleteButton.node.active = false;
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

    if (
      !name ||
      isNaN(quantity) ||
      quantity <= 0 ||
      !effect ||
      !type ||
      !icon
    ) {
      console.log("[AddItem] Thiếu dữ liệu hợp lệ");
      return;
    }

    const key = name.toLowerCase().replace(/\s+/g, "_");

    const newItem = { key, name, quantity, type, effect, icon };

    const added = this.manager.addItem(newItem);
    if (!added) {
      console.log("[AddItem] Item đã tồn tại:", key);
      return;
    }

    this.spawnItem(newItem);
    this.addItemForm.active = false;
  },
});
