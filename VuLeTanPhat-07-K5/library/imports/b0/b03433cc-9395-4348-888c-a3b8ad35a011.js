"use strict";
cc._RF.push(module, 'b0343PMk5VDSIiMo7itNaAR', 'ScoreSystem');
// Day1/Bai8/Data/ScoreSystem.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    addScoreButton: cc.Button,
    resetScoreButton: cc.Button,
    scoreLabel: cc.Label
  },

  onLoad: function onLoad() {
    this.score = 0;
    this.updateScoreLabel();

    this.addScoreButton.node.on("click", this.onAddScore, this);
    this.resetScoreButton.node.on("click", this.onResetScore, this);
  },
  onAddScore: function onAddScore() {
    this.score += 10; // cong 10 dierm
    this.updateScoreLabel(); // dua vo label
  },
  onResetScore: function onResetScore() {
    this.score = 0; //dua ve 0
    this.updateScoreLabel(); //dua vo label
  },
  updateScoreLabel: function updateScoreLabel() {
    this.scoreLabel.string = "Score: " + this.score;
  }
});

cc._RF.pop();