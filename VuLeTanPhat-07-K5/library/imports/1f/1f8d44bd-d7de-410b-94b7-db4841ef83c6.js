"use strict";
cc._RF.push(module, '1f8d4S9195BC5S320hB74PG', 'CharacterState');
// Day1/Bai9/Data/CharacterState.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    stateLabel: cc.Label,
    changeStateButton: cc.Button
  },

  onLoad: function onLoad() {
    this.state = "Idle";
    this.updateStateLabel();

    this.changeStateButton.node.on("click", this.toggleState, this);
  },
  toggleState: function toggleState() {
    this.state = this.state === "Idle" ? "Running" : "Idle";
    this.updateStateLabel();
  },
  updateStateLabel: function updateStateLabel() {
    this.stateLabel.string = "State: " + this.state;
  }
});

cc._RF.pop();