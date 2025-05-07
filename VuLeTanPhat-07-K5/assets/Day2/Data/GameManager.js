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
    recoverBtn: cc.Button,
  },

  onLoad() {
    this.player = {
      health: 100,
      attack: this.getRandom(10, 20),
      defense: this.getRandom(5, 15),
      energy: 50,
    };

    this.enemy = {
      health: 100,
      attack: this.getRandom(10, 20),
      defense: this.getRandom(5, 15),
      energy: 50,
    };

    this.gameOver = false;

    this.updateUI();
    this.attackBtn.node.on("click", this.onAttack, this);
    this.skillBtn.node.on("click", this.onSkill, this);
    this.recoverBtn.node.on("click", this.onRecover, this);
  },

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  updateUI() {
    // Update Player's UI
    this.playerHpLabel.string = `Player HP: ${this.player.health}`;
    this.playerMpLabel.string = `Energy: ${this.player.energy}`;
    this.playerAtkLabel.string = `Attack: ${this.player.attack}`;
    this.playerDefLabel.string = `Defense: ${this.player.defense}`;

    // Update Enemy's UI
    this.enemyHpLabel.string = `Enemy HP: ${this.enemy.health}`;
    this.enemyMpLabel.string = `Energy: ${this.enemy.energy}`;
    this.enemyAtkLabel.string = `Attack: ${this.enemy.attack}`;
    this.enemyDefLabel.string = `Defense: ${this.enemy.defense}`;
  },

  onAttack() {
    this.dealDamage(this.player, this.enemy, false);
    if (this.checkGameOver()) return;
    this.enemyTurn();
  },

  onSkill() {
    if (this.player.energy >= 30) {
      this.dealDamage(this.player, this.enemy, true);
      this.player.energy -= 30;
      if (this.checkGameOver()) return;
      this.enemyTurn();
    } else {
      this.messageLabel.string = "Not enough energy for skill!";
    }
  },

  onRecover() {
    this.player.energy = Math.min(this.player.energy + 20, 100);
    this.messageLabel.string = "Player recovers 20 energy!";
    this.enemyTurn();
  },

  dealDamage(attacker, defender, isSkill) {
    let baseDamage = attacker.attack - defender.defense;
    baseDamage = Math.max(1, baseDamage); // Không âm
    let damage = isSkill ? baseDamage * 2 : baseDamage;
    defender.health -= damage;
    this.messageLabel.string = `${
      isSkill ? "Skill" : "Attack"
    } dealt ${damage} damage`;
    this.updateUI();
  },

  enemyTurn() {
    setTimeout(() => {
      if (this.gameOver) return; // Kiểm tra lại trước khi làm hành động của enemy

      let action = Math.random();
      if (this.enemy.energy >= 30 && action < 0.3) {
        this.dealDamage(this.enemy, this.player, true);
        this.enemy.energy -= 30;
      } else if (action < 0.6) {
        this.dealDamage(this.enemy, this.player, false);
      } else {
        this.enemy.energy = Math.min(this.enemy.energy + 20, 100);
        this.messageLabel.string = "Enemy recovers 20 energy!";
      }

      this.updateUI();
      this.checkGameOver();
    }, 500); // Delay chút để mô phỏng lượt
  },

  checkGameOver() {
    if (this.player.health <= 0) {
      this.messageLabel.string = "Enemy Wins!";
      this.disableButtons();
      this.gameOver = true; // Đánh dấu game đã kết thúc
      return true; // Trả về true để dừng các hành động
    }

    if (this.enemy.health <= 0) {
      this.messageLabel.string = "Player Wins!";
      this.disableButtons();
      this.gameOver = true; // Đánh dấu game đã kết thúc
      return true; // Trả về true để dừng các hành động
    }

    return false;
  },

  disableButtons() {
    this.attackBtn.interactable = false;
    this.skillBtn.interactable = false;
    this.recoverBtn.interactable = false;
  },
});
