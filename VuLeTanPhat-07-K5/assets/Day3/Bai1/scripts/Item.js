cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    quantityLabel: cc.Label,
  },

  onLoad() {
    console.log("[Item.js] onLoad");

    this.node.on("INIT_ITEM_DATA", this.initItem, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
  },

  initItem(itemData, controller) {
    try {
      console.log("[Item.js] initItem called");

      this.data = itemData;
      this.controller = controller;

      if (this.icon) {
        this.icon.spriteFrame = itemData.icon;
      } else {
        console.error("[Item.js] icon not found");
      }

      if (this.quantityLabel) {
        this.quantityLabel.string = `${itemData.quantity}`;
      } else {
        console.error("[Item.js] quantityLabel not found");
      }

      this.node.name = itemData.key;
      console.log("[Item.js] Item initialized: ", itemData.name);
    } catch (error) {
      console.error("[Item.js] Error initializing item:", error);
    }
  },

  onClick() {
    try {
      if (this.data && this.controller) {
        console.log("[Item.js] Item clicked:", this.data.name);
        this.controller.onItemClick(this.data);
      } else {
        console.error("[Item.js] No data or controller");
      }
    } catch (error) {
      console.error("[Item.js] Error on item click:", error);
    }
  },

  onDestroy() {
    this.node.off("INIT_ITEM_DATA", this.initItem, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
  },
});
