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
    changeStateButton: cc.Button,
  },

  onLoad() {
    this.state = "Idle";
    this.updateStateLabel();

    this.changeStateButton.node.on("click", this.toggleState, this);
  },

  toggleState() {
    this.state = this.state === "Idle" ? "Running" : "Idle";
    this.updateStateLabel();
  },

  updateStateLabel() {
    this.stateLabel.string = "State: " + this.state;
  },
});
