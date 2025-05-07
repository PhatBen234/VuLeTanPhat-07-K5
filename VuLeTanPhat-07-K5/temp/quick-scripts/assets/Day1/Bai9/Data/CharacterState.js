(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai9/Data/CharacterState.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1f8d4S9195BC5S320hB74PG', 'CharacterState', __filename);
// Day1/Bai9/Data/CharacterState.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    stateLabel: cc.Label,
    changeStateButton: cc.Button
  },

  onLoad: function onLoad() {
    this.state = "Idle";

    this.updateStateLabel();

    this.changeStateButton.node.on("click", this.onChangeState, this);
  },
  onChangeState: function onChangeState() {
    this.toggleState();
    this.updateStateLabel();
  },
  toggleState: function toggleState() {
    this.state = this.state === "Idle" ? "Running" : "Idle";
  },
  updateStateLabel: function updateStateLabel() {
    if (this.stateLabel) {
      this.stateLabel.string = "State: " + this.state;
    }
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=CharacterState.js.map
        