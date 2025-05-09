cc.Class({
  extends: cc.Component,

  properties: {
    point: 1, // Điểm của mục tiêu
  },

  onLoad() {
    // Gán điểm ngẫu nhiên từ 1-10
    this.point = Math.floor(Math.random() * 10) + 1;

    // Tìm Label trong Node prefab và gán điểm cho nó
    const label = this.node.getChildByName("Point"); // Tên của Label trong prefab
    if (label) {
      label.getComponent(cc.Label).string = this.point.toString(); // Gán điểm cho Label
    } else {
      console.error("Label not found in target prefab!");
    }

    // Đặt thời gian sống ngẫu nhiên cho mục tiêu (0.3s - 0.8s)
    const lifeTime = 0.3 + Math.random() * 0.5;
    this.scheduleOnce(() => {
      this.node.destroy(); // Tự huỷ node sau thời gian sống
    }, lifeTime);

    // Thêm collider nếu chưa có để nhận sự kiện click
    if (!this.node.getComponent(cc.Collider)) {
      this.node.addComponent(cc.BoxCollider); // Có thể sử dụng cc.CircleCollider nếu cần
    }

    // Lắng nghe sự kiện touch để phát ra sự kiện click
    this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
  },

  onClick(event) {
    console.log("Target clicked! Point: ", this.point); // Kiểm tra xem có click vào mục tiêu không
    // Ngừng sự kiện tiếp tục
    event.stopPropagation();

    // Phát ra sự kiện target-clicked với điểm của mục tiêu
    this.node.emit("target-clicked", this.point);
    console.log("Event target-clicked emitted with point: ", this.point); // Kiểm tra sự kiện đã phát ra

    // Tự huỷ mục tiêu sau khi được click
    this.node.destroy();
  },

  onDestroy() {
    // Hủy sự kiện TOUCH_START khi node bị hủy để tránh memory leak
    this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
  },
});
