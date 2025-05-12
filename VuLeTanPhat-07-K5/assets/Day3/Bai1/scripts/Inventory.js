cc.Class({
  extends: cc.Component,

  properties: {
    holder: cc.Node, // Node chứa các item prefab
    itemPrefab: cc.Prefab, // Prefab của từng item
    previewIcon: cc.Sprite, // Icon hiển thị ở InfoPanel
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    typeLabel: cc.Label,
    effectLabel: cc.Label,
    useButton: cc.Button,
    deleteButton: cc.Button,
    equipStatusLabel: cc.Label, // Label hiện trạng thái đã trang bị
    healing_icon: cc.SpriteFrame,
    sword_icon: cc.SpriteFrame,
  },

  onLoad() {
    try {
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

      this.itemList = {}; // key -> node
      this.selectedItem = null; // Hiện vật phẩm đang chọn

      this.useButton.node.on("click", this.onUseItem, this);
      this.deleteButton.node.on("click", this.onDeleteItem, this);

      console.log("[Inventory.js] onLoad completed");
    } catch (error) {
      console.error("[Inventory.js] Error in onLoad:", error);
    }
  },

  start() {
    try {
      console.log("[Inventory.js] start");
      this.spawnItems();
    } catch (error) {
      console.error("[Inventory.js] Error in start:", error);
    }
  },

  spawnItems() {
    try {
      console.log("[Inventory.js] spawnItems");

      for (let itemData of this.itemConfigs) {
        const itemNode = cc.instantiate(this.itemPrefab);
        itemNode.parent = this.holder;
        itemNode.emit("INIT_ITEM_DATA", itemData, this);
        this.itemList[itemData.key] = itemNode;

        console.log("[Inventory.js] Tạo item:", itemData.name);
      }
    } catch (error) {
      console.error("[Inventory.js] Error in spawnItems:", error);
    }
  },

  onItemClick(itemData) {
    try {
      this.selectedItem = itemData;

      this.previewIcon.spriteFrame = itemData.icon;
      this.nameLabel.string = itemData.name;
      this.quantityLabel.string = `Số lượng: ${itemData.quantity}`;
      this.typeLabel.string = `Loại: ${itemData.type}`;
      this.effectLabel.string = itemData.effect;

      console.log("[Inventory.js] Item clicked:", itemData.name);
    } catch (error) {
      console.error("[Inventory.js] Error in onItemClick:", error);
    }
  },

  onUseItem() {
    try {
      if (!this.selectedItem) return;

      const item = this.selectedItem;
      if (item.type === "consumable") {
        item.quantity--;
        if (item.quantity <= 0) {
          this.removeItem(item.key);
        } else {
          this.quantityLabel.string = `Số lượng: ${item.quantity}`;
        }
      } else if (item.type === "equipment") {
        this.removeItem(item.key);
        this.showEquipStatus(`Đã trang bị: ${item.name}`);
      }

      console.log("[Inventory.js] Used item:", this.selectedItem.name);
    } catch (error) {
      console.error("[Inventory.js] Error in onUseItem:", error);
    }
  },

  onDeleteItem() {
    try {
      if (!this.selectedItem) return;
      this.removeItem(this.selectedItem.key);
      console.log("[Inventory.js] Deleted item:", this.selectedItem.name);
    } catch (error) {
      console.error("[Inventory.js] Error in onDeleteItem:", error);
    }
  },

  removeItem(key) {
    try {
      const node = this.itemList[key];
      if (node) node.destroy();
      delete this.itemList[key];

      // Clear panel
      this.previewIcon.spriteFrame = null;
      this.nameLabel.string = "";
      this.quantityLabel.string = "";
      this.typeLabel.string = "";
      this.effectLabel.string = "";

      this.selectedItem = null;

      console.log("[Inventory.js] Removed item:", key);
    } catch (error) {
      console.error("[Inventory.js] Error in removeItem:", error);
    }
  },

  showEquipStatus(text) {
    try {
      this.equipStatusLabel.string = text;
      this.equipStatusLabel.node.opacity = 255;
      this.equipStatusLabel.node.stopAllActions();
      this.equipStatusLabel.node.runAction(
        cc.sequence(cc.delayTime(2), cc.fadeOut(1))
      );

      console.log("[Inventory.js] Equip status shown:", text);
    } catch (error) {
      console.error("[Inventory.js] Error in showEquipStatus:", error);
    }
  },
});
