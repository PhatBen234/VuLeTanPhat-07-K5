(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai10/Data/LevelChecker.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aa1892TsAlA+IA++XkR+IvA', 'LevelChecker', __filename);
// Day1/Bai10/Data/LevelChecker.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    checkLevelButton: cc.Button,
    resultLabel: cc.Label,
    level: {
      default: 1,
      type: cc.Integer,
      tooltip: "Level của nhân vật (1–10)"
    }
  },

  onLoad: function onLoad() {
    this.checkLevelButton.node.on("click", this.checkLevel, this);
  },
  checkLevel: function checkLevel() {
    var message = "";

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
        //# sourceMappingURL=LevelChecker.js.map
        