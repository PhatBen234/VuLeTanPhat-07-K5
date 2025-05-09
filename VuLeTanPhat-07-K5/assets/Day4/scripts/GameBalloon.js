cc.Class({
  extends: cc.Component,

  properties: {
    scoreLabel: cc.Label, // Hiển thị điểm
    timeLabel: cc.Label, // Hiển thị thời gian
    targetPrefab: cc.Prefab, // Prefab mục tiêu
    targetArea: cc.Node, // Vùng chứa mục tiêu
    gameDuration: 60, // Thời gian chơi (giây)
  },

  onLoad() {
    // Khởi động game
    this.resetGame();
    this.startGame();
  },

  startGame() {
    // Reset điểm và thời gian
    this.score = 0;
    this.timeLeft = this.gameDuration;
    this.updateUI();

    // Gọi spawnTarget lần đầu
    this.spawnTarget();

    // Đếm thời gian mỗi frame
    this.schedule(this.updateTimer, 1);
  },

  resetGame() {
    // Reset điểm và thời gian
    this.score = 0;
    this.timeLeft = 0;
    this.updateUI();
  },

  spawnTarget() {
    // Instantiate TargetPrefab và thêm vào TargetArea
    let target = cc.instantiate(this.targetPrefab);
    target.parent = this.targetArea;

    // Đặt vị trí random trong targetArea
    const randX = (Math.random() - 0.5) * this.targetArea.width;
    const randY = (Math.random() - 0.5) * this.targetArea.height;
    target.setPosition(randX, randY);

    // Lắng nghe sự kiện target-clicked từ target
    target.on("target-clicked", this.onTargetClicked, this);
  },

  onTargetClicked(event) {
    console.log("Target clicked in GameManager! Point: ", event.detail); // Kiểm tra khi nhận sự kiện và điểm
    // Nhận điểm từ sự kiện
    const point = event.detail;
    this.score += point;
    this.updateUI();

    // Tạo mục tiêu mới
    this.spawnTarget();
  },

  updateUI() {
    // Cập nhật điểm và thời gian lên UI
    this.scoreLabel.string = "Score: " + this.score;
    this.timeLabel.string = "Time: " + this.timeLeft;
  },

  updateTimer() {
    // Cập nhật thời gian còn lại
    if (this.timeLeft > 0) {
      this.timeLeft--;
      this.updateUI();
    } else {
      this.endGame();
    }
  },

  endGame() {
    // Dừng lại và hiển thị kết quả
    cc.log("Game Over! Final Score: " + this.score);
    this.unschedule(this.updateTimer); // Dừng timer
  },

  onDestroy() {
    // Hủy sự kiện để tránh memory leak
    this.targetArea.off("target-clicked", this.onTargetClicked, this);
  }
});
