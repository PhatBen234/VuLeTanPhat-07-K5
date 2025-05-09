cc.Class({
  extends: cc.Component,

  properties: {
    targetPrefab: cc.Prefab, // Prefab của bóng
    targetArea: cc.Node, // Node chứa bóng
    scoreLabel: cc.Label, // Label hiển thị điểm
    timeLabel: cc.Label, // Label hiển thị thời gian còn lại
    numSeconds: 60, // Tổng thời gian chạy game
    spawnInterval: 1.0, // Thời gian giữa mỗi lần tạo bóng
  },

  onLoad() {
    this.score = 0; // Điểm bắt đầu
    this.elapsedTime = 0; // Thời gian đã trôi qua
    this.remainingTime = this.numSeconds; // Thời gian còn lại cho game

    // Bắt đầu tạo bóng định kỳ
    this.schedule(this.spawnTargetPeriodically, this.spawnInterval);

    // Bắt đầu đếm ngược thời gian
    this.schedule(this.updateTimer, 1.0);

    // Nghe sự kiện khi bóng bị click
    this.node.on("target-clicked", this.onTargetClicked, this);

    // Cập nhật điểm và thời gian ngay từ đầu
    this.updateScoreLabel();
    this.updateTimerLabel();
  },

  spawnTargetPeriodically() {
    if (this.remainingTime <= 0) {
      this.unschedule(this.spawnTargetPeriodically); // Dừng tạo bóng khi hết giờ
      console.log("⏰ Hết giờ tạo bóng!");
      return;
    }

    const target = cc.instantiate(this.targetPrefab);
    target.parent = this.targetArea;
    target.setPosition(this.getRandomPosition());
  },

  updateTimer() {
    if (this.remainingTime > 0) {
      this.remainingTime -= 1; // Giảm 1 giây mỗi lần gọi
      this.updateTimerLabel(); // Cập nhật hiển thị thời gian
    } else {
      this.unschedule(this.updateTimer); // Dừng đếm ngược khi hết thời gian
      console.log("⏰ Hết giờ game!");
    }
  },

  updateTimerLabel() {
    if (this.timeLabel) {
      this.timeLabel.string = "Time: " + this.remainingTime + "s";
    }
  },

  getRandomPosition() {
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 300 - 150;
    return cc.v2(x, y);
  },

  // Hàm tính điểm tổng
  calculateScore(point) {
    this.score += point; // Cộng điểm vào tổng điểm
    this.updateScoreLabel(); // Cập nhật label điểm
  },

  onTargetClicked(point) {
    // Gọi hàm tính điểm khi mục tiêu bị click
    console.log(point);

    this.calculateScore(point);
  },

  updateScoreLabel() {
    if (this.scoreLabel) {
      this.scoreLabel.string = "Score: " + this.score; // Cập nhật label hiển thị tổng điểm
    }
  },

  onDestroy() {
    this.node.off("target-clicked", this.onTargetClicked, this);
    this.unscheduleAllCallbacks(); // Dừng tất cả các lịch trình khi hủy node
  },
});
