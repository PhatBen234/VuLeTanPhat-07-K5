cc.Class({
  extends: cc.Component,

  properties: {
    gameOverPanel: cc.Node, // Node chứa panel Game Over
    finalScoreLabel: cc.Label, // Label hiển thị điểm cuối cùng
    restartButton: cc.Button, // Nút chơi lại
  },

  onLoad() {
    // Ẩn panel lúc bắt đầu
    if (this.gameOverPanel) {
      this.gameOverPanel.active = false;
    }

    // Gán sự kiện click cho nút restart nếu tồn tại
    if (this.restartButton && this.restartButton.node) {
      this.restartButton.node.on("click", this.onRestartClick, this);
    } else {
      console.warn("⚠️ restartButton chưa được gán trong Inspector!");
    }
  },

  showGameOver(finalScore) {
    if (this.finalScoreLabel) {
      this.finalScoreLabel.string = "Final Score: " + finalScore;
    }
    if (this.gameOverPanel) {
      this.gameOverPanel.active = true;
    }
  },

  onRestartClick() {
    this.scheduleOnce(() => {
      cc.director.loadScene("Bai1_Day4"); 
    }, 0.1);
  },

  onDestroy() {
    // Gỡ sự kiện nếu node còn tồn tại
    if (this.restartButton && this.restartButton.node) {
      this.restartButton.node.off("click", this.onRestartClick, this);
    }
  },
});
