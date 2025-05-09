cc.Class({
  extends: cc.Component,

  properties: {
    point: 1, // Điểm số của mục tiêu
    baloonNode: cc.Node, // Sprite bóng bay
    labelNode: cc.Label, // Label hiển thị điểm
  },

  onLoad() {
    // Gán điểm ngẫu nhiên từ 1–10
    this.point = Math.floor(Math.random() * 10) + 1;

    // Kiểm tra xem labelNode có tồn tại không
    if (this.labelNode) {
      this.labelNode.string = this.point.toString(); // Hiển thị điểm lên label
    } else {
      console.error("❌ Không tìm thấy labelNode trong Target Prefab!");
    }

    // Tự huỷ sau một khoảng thời gian ngẫu nhiên giữa 0.3 và 0.8 giây
    const lifeTime = 0.3 + Math.random() * 0.5;
    this.scheduleOnce(() => {
      if (this.node && this.node.isValid) {
        this.node.destroy(); // Huỷ mục tiêu sau thời gian ngẫu nhiên
      }
    }, lifeTime);

    // Bắt sự kiện click trên node (mục tiêu)
    this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
  },

  onClick(event) {
    event.stopPropagation(); // Ngừng sự kiện tiếp tục lan truyền

    // Hiển thị điểm của mục tiêu khi người chơi click vào
    console.log("[Target] Clicked, điểm:", this.point);

    // Phát sự kiện "target-clicked" với điểm số của mục tiêu
    // this.node.emit("target-clicked", this.point);
    console.log(this.node);
    console.log(this.node.parent.getComponent("GameBalloon"));
    console.log(this.node.parent.parent.getComponent("GameBalloon"));
    console.log(this.node.parent.parent.children);
    this.node.parent.parent.children.forEach((child) => {
      if (child._name == "GameBalloon") {
        child.emit("target-clicked", this.point);
      }
    });

    // for (const child in this.node.parent.parent.children) {
    //   console.log(child);
    // }
    // this.node.parent.parent.children[5].emit("target-clicked", this.point);

    // Huỷ mục tiêu khi người chơi click
    this.node.destroy();
  },

  onDestroy() {
    // Đảm bảo sự kiện được gỡ bỏ khi node bị huỷ
    this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
  },
});
