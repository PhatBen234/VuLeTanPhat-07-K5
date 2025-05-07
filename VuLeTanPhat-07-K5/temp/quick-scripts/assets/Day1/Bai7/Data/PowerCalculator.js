(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai7/Data/PowerCalculator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ee0284Eu8dJf6dO/TL7yLJ5', 'PowerCalculator', __filename);
// Day1/Bai7/Data/PowerCalculator.js

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
        inputHP: cc.EditBox,
        inputMana: cc.EditBox,
        buttonPower: cc.Button,
        resultLabel: cc.Label
    },

    onLoad: function onLoad() {
        this.buttonPower.node.on('click', this.calculatePower, this); // neu xai cai on "click thi khong can add truc tiep"
    },
    calculatePower: function calculatePower() {
        var hp = parseFloat(this.inputHP.string) || 0; //let trong JS la bien co the cap nhat gia tri ( khac voi const 1 xiu)
        var mana = parseFloat(this.inputMana.string) || 0; // pare kieu float de nhan cac so thap phan
        var power = hp * mana;
        this.resultLabel.string = "Power: " + power;
    }
});

//

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
        //# sourceMappingURL=PowerCalculator.js.map
        