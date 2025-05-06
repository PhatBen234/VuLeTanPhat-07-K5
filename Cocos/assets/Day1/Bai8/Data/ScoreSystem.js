cc.Class({
  extends: cc.Component,

  properties: {
    addScoreButton: cc.Button,
    resetScoreButton: cc.Button,
    scoreLabel: cc.Label,
  },

  onLoad() {
    this.score = 0;
    this.updateScoreLabel();

    this.addScoreButton.node.on("click", this.onAddScore, this);
    this.resetScoreButton.node.on("click", this.onResetScore, this);
  },

  onAddScore() {
    this.score += 10; // cong 10 dierm
    this.updateScoreLabel(); // dua vo label
  },

  onResetScore() {
    this.score = 0; //dua ve 0
    this.updateScoreLabel(); //dua vo label
  },

  updateScoreLabel() {
    this.scoreLabel.string = "Score: " + this.score;
  },
});
