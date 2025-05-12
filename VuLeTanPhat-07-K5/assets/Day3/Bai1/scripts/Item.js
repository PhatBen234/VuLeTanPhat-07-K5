cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    quantityLabel: cc.Label,
  },

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
  },

  initItem(itemData, controller) {
    console.log("[Item] initItem nhận dữ liệu:", itemData);
    this.data = itemData;
    this.controller = controller;

    this.icon.spriteFrame = itemData.icon;
    this.quantityLabel.string = `x${itemData.quantity}`;
    this.node.name = itemData.key;
  },

  updateQuantity(newQuantity) {
    this.quantityLabel.string = `${newQuantity}`;
  },

  onClick() {
    console.log("[Item] onClick:", this.data);
    if (this.data && this.controller) {
      this.controller.onItemClick(this.data);
    }
  },

  onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
  },
});
