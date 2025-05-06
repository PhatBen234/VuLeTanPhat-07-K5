cc.Class({
  extends: cc.Component,

  properties: {
    checkLevelButton: cc.Button,
    resultLabel: cc.Label,
    level: {
      default: 1,
      type: cc.Integer,
      tooltip: "Level của nhân vật (1–10)",
    },
  },

  onLoad() {
    this.checkLevelButton.node.on("click", this.checkLevel, this);
  },

  checkLevel() {
    let message = "";

    if (this.level >= 1 && this.level <= 3) {
      message = "Beginner";
    } else if (this.level >= 4 && this.level <= 7) {
      message = "Intermediate";
    } else if (this.level >= 8 && this.level <= 10) {
      message = "Expert";
    } else {
      message = "Invalid Level";
    }

    this.resultLabel.string = "Level " + this.level + ": " + message;
  },
});
