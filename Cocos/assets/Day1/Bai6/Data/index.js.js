cc.Class({
  extends: cc.Component,

  properties: {
    buttonStart: cc.Button,
    labelMessage: cc.Label,
    buttonExit: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.buttonStart.node.on("click", this.onStartGame, this);
    this.buttonExit.node.on("click", this.onExitGame, this);
  },

  onStartGame() {
    this.labelMessage.string = "Game is starting...";
  },

  onExitGame() {
    this.labelMessage.string = "Bye";
  },

  // update (dt) {},
});
