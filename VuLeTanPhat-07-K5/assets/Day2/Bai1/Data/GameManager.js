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

    // Message for Game Over or Not enough mana
    messageLabel: cc.Label,

    // Buttons
    attackBtn: cc.Button,
    skillBtn: cc.Button,
    recoverBtn: cc.Button,
  },

  onLoad() {
    this.player = {
      health: 100,
      energy: 50,
      attack: this.randomInRange(10, 20),
      defense: this.randomInRange(5, 15),
    };
    this.enemy = {
      health: 100,
      energy: 50,
      attack: this.randomInRange(10, 20),
      defense: this.randomInRange(5, 15),
    };

    this.updateUI();

    this.attackBtn.node.on("click", this.onAttack, this);
    this.skillBtn.node.on("click", this.onSkill, this);
    this.recoverBtn.node.on("click", this.onRecover, this);
  },

  randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  updateUI() {
    this.playerHpLabel.string = `HP: ${Math.max(0, this.player.health)}`;
    this.playerMpLabel.string = `MP: ${this.player.energy}`;
    this.playerAtkLabel.string = `ATK: ${this.player.attack}`;
    this.playerDefLabel.string = `DEF: ${this.player.defense}`;

    this.enemyHpLabel.string = `HP: ${Math.max(0, this.enemy.health)}`;
    this.enemyMpLabel.string = `MP: ${this.enemy.energy}`;
    this.enemyAtkLabel.string = `ATK: ${this.enemy.attack}`;
    this.enemyDefLabel.string = `DEF: ${this.enemy.defense}`;
  },

  onAttack() {
    if (this.isGameOver()) return;

    const damage = Math.max(0, this.player.attack - this.enemy.defense);
    this.enemy.health -= damage;
    this.updateUI();

    this.checkGameOver();
    if (!this.isGameOver()) this.scheduleOnce(this.enemyTurn, 1);
  },

  onSkill() {
    if (this.isGameOver()) return;

    if (this.player.energy >= 30) {
      this.player.energy -= 30;
      const damage = Math.max(0, this.player.attack * 2 - this.enemy.defense);
      this.enemy.health -= damage;
      this.updateUI();

      this.checkGameOver();
      if (!this.isGameOver()) this.scheduleOnce(this.enemyTurn, 1);
    } else {
      this.messageLabel.string = "❌ Not enough energy!";
      this.scheduleOnce(() => {
        this.messageLabel.string = "";
      }, 2);
    }
  },

  onRecover() {
    if (this.isGameOver()) return;

    this.player.energy = Math.min(100, this.player.energy + 20);
    this.updateUI();

    this.scheduleOnce(this.enemyTurn, 1);
  },

  enemyTurn() {
    if (this.isGameOver()) return;

    const damage = Math.max(0, this.enemy.attack - this.player.defense);
    this.player.health -= damage;
    this.updateUI();
    this.checkGameOver();
  },

  checkGameOver() {
    if (this.player.health <= 0) {
      this.messageLabel.string = "💀 You Lose!";
      this.disableButtons();
    } else if (this.enemy.health <= 0) {
      this.messageLabel.string = "🏆 You Win!";
      this.disableButtons();
    }
  },

  isGameOver() {
    return this.player.health <= 0 || this.enemy.health <= 0;
  },

  disableButtons() {
    this.attackBtn.interactable = false;
    this.skillBtn.interactable = false;
    this.recoverBtn.interactable = false;
  },
});
