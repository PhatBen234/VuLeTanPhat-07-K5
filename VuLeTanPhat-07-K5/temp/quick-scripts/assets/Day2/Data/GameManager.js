(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day2/Data/GameManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd20d0HsExFECogTZlT4U5ae', 'GameManager', __filename);
// Day2/Data/GameManager.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    // Player's properties
    playerHpLabel: cc.Label,
    playerMpLabel: cc.Label,
    playerAtkLabel: cc.Label,
    playerDefLabel: cc.Label,

    // Enemy's properties
    enemyHpLabel: cc.Label,
    enemyMpLabel: cc.Label,
    enemyAtkLabel: cc.Label,
    enemyDefLabel: cc.Label,

    // Message label
    messageLabel: cc.Label,

    // Buttons
    attackBtn: cc.Button,
    skillBtn: cc.Button,
    recoverBtn: cc.Button
  },

  onLoad: function onLoad() {
    this.player = {
      health: 100,
      attack: this.getRandom(10, 20),
      defense: this.getRandom(5, 15),
      energy: 50
    };

    this.enemy = {
      health: 100,
      attack: this.getRandom(10, 20),
      defense: this.getRandom(5, 15),
      energy: 50
    };

    this.gameOver = false;

    this.updateUI();
    this.attackBtn.node.on("click", this.onAttack, this);
    this.skillBtn.node.on("click", this.onSkill, this);
    this.recoverBtn.node.on("click", this.onRecover, this);
  },
  getRandom: function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  updateUI: function updateUI() {
    // Clamp HP to avoid negative numbers
    this.player.health = Math.max(0, this.player.health);
    this.enemy.health = Math.max(0, this.enemy.health);

    this.playerHpLabel.string = "Player HP: " + this.player.health;
    this.playerMpLabel.string = "Energy: " + this.player.energy;
    this.playerAtkLabel.string = "Attack: " + this.player.attack;
    this.playerDefLabel.string = "Defense: " + this.player.defense;

    this.enemyHpLabel.string = "Enemy HP: " + this.enemy.health;
    this.enemyMpLabel.string = "Energy: " + this.enemy.energy;
    this.enemyAtkLabel.string = "Attack: " + this.enemy.attack;
    this.enemyDefLabel.string = "Defense: " + this.enemy.defense;
  },
  onAttack: function onAttack() {
    if (this.gameOver) return;
    this.dealDamage(this.player, this.enemy, false);

    if (this.checkGameOver()) return;
    this.enemyTurn();
  },
  onSkill: function onSkill() {
    if (this.gameOver) return;

    if (this.player.energy >= 30) {
      this.dealDamage(this.player, this.enemy, true);
      this.player.energy -= 30;

      if (this.checkGameOver()) return;
      this.enemyTurn();
    } else {
      this.messageLabel.string = "Not enough energy for skill!";
    }
  },
  onRecover: function onRecover() {
    if (this.gameOver) return;

    this.player.energy = Math.min(this.player.energy + 20, 100);
    this.messageLabel.string = "Player recovers 20 energy!";
    this.updateUI();
    this.enemyTurn();
  },
  dealDamage: function dealDamage(attacker, defender, isSkill) {
    var baseDamage = attacker.attack - defender.defense;
    baseDamage = Math.max(1, baseDamage);
    var damage = isSkill ? baseDamage * 2 : baseDamage;
    defender.health -= damage;

    // Prevent negative health
    defender.health = Math.max(0, defender.health);

    this.messageLabel.string = (isSkill ? "Skill" : "Attack") + " dealt " + damage + " damage";
    this.updateUI(); // Ensure UI reflects latest health
  },
  enemyTurn: function enemyTurn() {
    var _this = this;

    if (this.gameOver) return;

    this.scheduleOnce(function () {
      if (_this.gameOver) return;

      var action = Math.random();

      if (_this.enemy.energy >= 30 && action < 0.3) {
        _this.dealDamage(_this.enemy, _this.player, true);
        _this.enemy.energy -= 30;
      } else if (action < 0.6) {
        _this.dealDamage(_this.enemy, _this.player, false);
      } else {
        _this.enemy.energy = Math.min(_this.enemy.energy + 20, 100);
        _this.messageLabel.string = "Enemy recovers 20 energy!";
      }

      _this.updateUI();
      _this.checkGameOver();
    }, 0.5);
  },
  checkGameOver: function checkGameOver() {
    var isOver = false;

    if (this.player.health <= 0) {
      this.player.health = 0;
      this.messageLabel.string = "Enemy Wins!";
      isOver = true;
    }

    if (this.enemy.health <= 0) {
      this.enemy.health = 0;
      this.messageLabel.string = "Player Wins!";
      isOver = true;
    }

    if (isOver) {
      this.gameOver = true;
      this.disableButtons();
      this.updateUI(); // Ensure final state is shown
      return true;
    }

    return false;
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
        