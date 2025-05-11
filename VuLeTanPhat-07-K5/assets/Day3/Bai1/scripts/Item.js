cc.Class({
  extends: cc.Component,

  properties: {
    Icon: cc.Sprite,
    QuantityLabel: cc.Label,
  },

  onLoad() {
    this.node.on("INIT_DATA_NEW", this.initData, this);
  },

  initData(data, mainClass) {
    const { iconIndex, quantity } = data;
    this.Icon.spriteFrame = mainClass.iconList[iconIndex];

    this.QuantityLabel.string = "x" + quantity;
    this.data = data;
    this.mainClass = mainClass;
  },

  onClick() {
    this.mainClass.itemClick(this.data);
  },

  onDestroy() {
    this.node.off("INIT_DATA_NEW", this.initData, this);
  },
});
