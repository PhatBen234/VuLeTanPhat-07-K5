"use strict";
cc._RF.push(module, 'd122bi6MipEfbCN48JYsdLS', 'index.js');
// Day1/Bai6/Data/index.js.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    buttonStart: cc.Button,
    labelMessage: cc.Label,
    buttonExit: cc.Button
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.buttonStart.node.on("click", this.onStartGame, this);
    this.buttonExit.node.on("click", this.onExitGame, this); // neu xai cai on "click thi khong can add truc tiep"
  },
  onStartGame: function onStartGame() {
    this.labelMessage.string = "Game is starting...";
  },
  onExitGame: function onExitGame() {
    this.labelMessage.string = "Bye";
  }
}

// update (dt) {},
);

cc._RF.pop();