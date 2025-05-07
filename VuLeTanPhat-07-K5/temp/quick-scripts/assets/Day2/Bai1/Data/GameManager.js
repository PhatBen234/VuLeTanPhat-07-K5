(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day2/Bai1/Data/GameManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '99b459YUgtMnq0vcvZ+MQmc', 'GameManager', __filename);
// Day2/Bai1/Data/GameManager.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    // Player labels
    playerHpLabel: cc.Label,
    playerMpLabel: cc.Label,
    playerAtkLabel: cc.Label,
    playerDefLabel: cc.Label,

    // Enemy labels
    enemyHpLabel: cc.Label,
    enemyMpLabel: cc.Label,
    enemyAtkLabel: cc.Label,
    enemyDefLabel: cc.Label,

    // Message display
    messageLabel: cc.Label,

    // Buttons
    attackBtn: cc.Button,
    skillBtn: cc.Button,
    recoverBtn: cc.Button
  },

  onLoad: function onLoad() {
    this.initCharacters();
    this.updateUI();
    this.setupButtonEvents();
  },
  initCharacters: function initCharacters() {
    this.player = {
      health: 100,
      energy: 50,
      attack: this.randomInRange(10, 20),
      defense: this.randomInRange(5, 15)
    };

    this.enemy = {
      health: 100,
      energy: 50,
      attack: this.randomInRange(10, 20),
      defense: this.randomInRange(5, 15)
    };
  },
  setupButtonEvents: function setupButtonEvents() {
    this.attackBtn.node.on("click", this.onAttack, this);
    this.skillBtn.node.on("click", this.onSkill, this);
    this.recoverBtn.node.on("click", this.onRecover, this);
  },
  randomInRange: function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  updateUI: function updateUI() {
    this.playerHpLabel.string = "HP: " + Math.max(0, this.player.health);
    this.playerMpLabel.string = "MP: " + this.player.energy;
    this.playerAtkLabel.string = "ATK: " + this.player.attack;
    this.playerDefLabel.string = "DEF: " + this.player.defense;

    this.enemyHpLabel.string = "HP: " + Math.max(0, this.enemy.health);
    this.enemyMpLabel.string = "MP: " + this.enemy.energy;
    this.enemyAtkLabel.string = "ATK: " + this.enemy.attack;
    this.enemyDefLabel.string = "DEF: " + this.enemy.defense;
  },
  onAttack: function onAttack() {
    if (this.isGameOver()) return;

    var damage = Math.max(0, this.player.attack - this.enemy.defense);
    this.enemy.health -= damage;

    this.updateUI();
    this.checkGameOver();

    if (!this.isGameOver()) this.scheduleOnce(this.enemyTurn, 1);
  },
  onSkill: function onSkill() {
    var _this = this;

    if (this.isGameOver()) return;

    if (this.player.energy >= 30) {
      this.player.energy -= 30;
      var damage = Math.max(0, this.player.attack * 2 - this.enemy.defense);
      this.enemy.health -= damage;

      this.updateUI();
      this.checkGameOver();

      if (!this.isGameOver()) this.scheduleOnce(this.enemyTurn, 1);
    } else {
      this.messageLabel.string = "❌ Not enough energy!";
      this.scheduleOnce(function () {
        _this.messageLabel.string = "";
      }, 2);
    }
  },
  onRecover: function onRecover() {
    if (this.isGameOver()) return;

    this.player.energy = Math.min(100, this.player.energy + 20);

    this.updateUI();
    this.scheduleOnce(this.enemyTurn, 1);
  },
  enemyTurn: function enemyTurn() {
    if (this.isGameOver()) return;

    var damage = Math.max(0, this.enemy.attack - this.player.defense);
    this.player.health -= damage;

    this.updateUI();
    this.checkGameOver();
  },
  checkGameOver: function checkGameOver() {
    if (this.player.health <= 0) {
      this.messageLabel.string = "💀 You Lose!";
      this.disableButtons();
    } else if (this.enemy.health <= 0) {
      this.messageLabel.string = "🏆 You Win!";
      this.disableButtons();
    }
  },
  isGameOver: function isGameOver() {
    return this.player.health <= 0 || this.enemy.health <= 0;
  },
  disableButtons: function disableButtons() {
    this.attackBtn.interactable = false;
    this.skillBtn.interactable = false;
    this.recoverBtn.interactable = false;
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
        //# sourceMappingURL=GameManager.js.map
        