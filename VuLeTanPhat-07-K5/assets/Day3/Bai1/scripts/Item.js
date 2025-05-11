cc.Class({
  extends: cc.Component,

  properties: {
    icon: cc.Sprite,
    quantityLabel: cc.Label,
  },

  onLoad() {
    console.log(
      "[ItemDisplay] onLoad: Gắn listener INIT_ITEM_DATA và TOUCH_END"
    );

    // Gắn sự kiện INIT_ITEM_DATA trực tiếp vào node
    this.node.on("INIT_ITEM_DATA", this.initItem, this);

    // Kiểm tra node và gắn sự kiện click cho icon và quantityLabel
    this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);

    if (this.icon && this.icon.node) {
      this.icon.node.on(cc.Node.EventType.TOUCH_END, this.onIconClick, this);
    } else {
      console.warn("[ItemDisplay] Không có icon để gắn sự kiện click!");
    }

    if (this.quantityLabel && this.quantityLabel.node) {
      this.quantityLabel.node.on(
        cc.Node.EventType.TOUCH_END,
        this.onQuantityClick,
        this
      );
    }
  },

  initItem(itemData, controller) {
    console.log(
      "[ItemDisplay] INIT_ITEM_DATA nhận được:",
      itemData,
      controller
    );

    this.data = itemData;
    this.controller = controller;

    this.icon.spriteFrame = itemData.icon;
    this.quantityLabel.string = `${itemData.quantity}`;
    this.node.name = itemData.key;

    console.log("[ItemDisplay] Item đã được khởi tạo:", this.node.name);
  },

  onClick(event) {
    console.log("[ItemDisplay] onClick: TOUCH_END được gọi!");
    console.log("[ItemDisplay] this.data =", this.data);
    console.log("[ItemDisplay] this.controller =", this.controller);

    // Gọi trực tiếp controller để xử lý
    if (!this.data || !this.controller) {
      console.warn("[ItemDisplay] Thiếu data hoặc controller");
      return;
    }

    if (typeof this.controller.onItemClick === "function") {
      console.log("[ItemDisplay] Gọi controller.onItemClick với:", this.data);
      this.controller.onItemClick(this.data);
    } else {
      console.error("[ItemDisplay] controller KHÔNG có hàm onItemClick!");
    }
  },

  onIconClick() {
    console.log("[ItemDisplay] icon.sprite được click!");
  },

  onQuantityClick() {
    console.log("[ItemDisplay] quantityLabel được click!");
  },

  onDestroy() {
    console.log("[ItemDisplay] onDestroy: Hủy listener");
    this.node.off("INIT_ITEM_DATA", this.initItem, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    if (this.icon && this.icon.node) {
      this.icon.node.off(cc.Node.EventType.TOUCH_END, this.onIconClick, this);
    }
    if (this.quantityLabel && this.quantityLabel.node) {
      this.quantityLabel.node.off(
        cc.Node.EventType.TOUCH_END,
        this.onQuantityClick,
        this
      );
    }
  },
});
