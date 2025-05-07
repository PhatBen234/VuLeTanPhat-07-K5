(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai3/Data/index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2e06fJy8zFA9ri7OYmaovRP', 'index', __filename);
// Day1/Bai3/Data/index.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        playerName: 'Phat Ben',
        health: 0,
        score: 0,
        scoreLabel: cc.Label,
        healthLabel: cc.Label
    },

    onLoad: function onLoad() {
        this.updateLabels();
    },
    updateLabels: function updateLabels() {
        this.scoreLabel.string = 'Score: ' + this.score;
        this.healthLabel.string = 'HP: ' + this.health;
    },
    addPoint: function addPoint() {
        this.score++;
        if (this.score % 10 === 0) {
            this.health += 1;
        }

        this.updateLabels();
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
        //# sourceMappingURL=index.js.map
        