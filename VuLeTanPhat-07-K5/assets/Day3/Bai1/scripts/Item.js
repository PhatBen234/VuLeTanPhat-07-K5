cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    quantityLabel: cc.Label,
  },

  onLoad() {
    this.node.on("INIT_ITEM_DATA", this.initItem, this);
  },

  initItem(itemData) {
    this.data = itemData;

    // Hiển thị icon và số lượng
    this.icon.spriteFrame = itemData.icon;
    this.quantityLabel.string = `x${itemData.quantity}`;

    console.log("Item prefab loaded with:", itemData.name);
  },

  onClick() {
    if (!this.data) return;
    console.log("Item clicked:", this.data.name);
    this.node.emit("ITEM_SELECTED", this.data); // Gửi toàn bộ thông tin item
  },

  onDestroy() {
    this.node.off("INIT_ITEM_DATA", this.initItem, this);
  },
});
