cc.Class({
  extends: cc.Component,

  properties: {
    stateLabel: cc.Label,
    changeStateButton: cc.Button,
  },

  onLoad() {
    this.state = "Idle";

    this.updateStateLabel();

    this.changeStateButton.node.on("click", this.onChangeState, this);
  },

  onChangeState() {
    this.toggleState();
    this.updateStateLabel();
  },

  toggleState() {
    this.state = this.state === "Idle" ? "Running" : "Idle";
  },

  updateStateLabel() {
    if (this.stateLabel) {
      this.stateLabel.string = "State: " + this.state;
    }
  },
});
