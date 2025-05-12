cc.Class({
  extends: cc.Component,

  properties: {
    holder: cc.Node,
    itemPrefab: cc.Prefab,

    // Hiển thị chi tiết item
    previewIcon: cc.Sprite,
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    typeLabel: cc.Label,
    effectLabel: cc.Label,
    useButton: cc.Button,
    deleteButton: cc.Button,
    equipStatusLabel: cc.Label,

    // Icon mẫu
    healing_icon: cc.SpriteFrame,
    sword_icon: cc.SpriteFrame,

    // Add Item Form
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
    this.itemConfigs = [
      {
        key: "healing_potion",
        name: "Bình máu nhỏ",
        quantity: 5,
        type: "consumable",
        effect: "Hồi 20 máu",
        icon: this.healing_icon,
      },
      {
        key: "sword",
        name: "Kiếm Sắt",
        quantity: 1,
        type: "equipment",
        effect: "Tăng 10 sức mạnh",
        icon: this.sword_icon,
      },
    ];

    this.itemList = {};
    this.selectedItem = null;

    this.useButton.node.on("click", this.onUseItem, this);
    this.deleteButton.node.on("click", this.onDeleteItem, this);
    this.addItemToggleButton.node.on("click", this.toggleAddItemForm, this);
    this.addItemButton.node.on("click", this.onAddNewItem, this);
  },

  start() {
    this.equipStatusLabel.node.opacity = 0;
    this.spawnItems();
    this.hideItemDetails();
    this.addItemForm.active = false;
  },

  spawnItems() {
    for (let itemData of this.itemConfigs) {
      const itemNode = cc.instantiate(this.itemPrefab);
      itemNode.parent = this.holder;

      const itemScript = itemNode.getComponent("Item");
      if (itemScript) {
        itemScript.initItem(itemData, this);
      }

      this.itemList[itemData.key] = {
        node: itemNode,
        script: itemScript,
      };
    }
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

    const item = this.selectedItem;

    if (item.type === "consumable") {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeItem(item.key);
      } else {
        this.quantityLabel.string = `Số lượng: ${item.quantity}`;
        const entry = this.itemList[item.key];
        if (entry && entry.script) {
          entry.script.updateQuantity(item.quantity);
        }
      }
    } else if (item.type === "equipment") {
      this.removeItem(item.key);
      this.showEquipStatus(`Đã trang bị: ${item.name}`);
    }
  },

  onDeleteItem() {
    if (!this.selectedItem) return;
    this.removeItem(this.selectedItem.key);
  },

  removeItem(key) {
    const entry = this.itemList[key];
    if (entry && entry.node) {
      entry.node.destroy();
    }

    delete this.itemList[key];
    this.selectedItem = null;

    this.previewIcon.spriteFrame = null;
    this.nameLabel.string = "";
    this.quantityLabel.string = "";
    this.typeLabel.string = "";
    this.effectLabel.string = "";

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

    if (this.itemList[key]) {
      console.log("[AddItem] Item đã tồn tại:", key);
      return;
    }

    const newItem = {
      key,
      name,
      quantity,
      type,
      effect,
      icon,
    };

    const itemNode = cc.instantiate(this.itemPrefab);
    itemNode.parent = this.holder;

    const itemScript = itemNode.getComponent("Item");
    if (itemScript) {
      itemScript.initItem(newItem, this);
    }

    this.itemList[key] = {
      node: itemNode,
      script: itemScript,
    };

    this.addItemForm.active = false;
  },
});
