cc.Class({
    extends: cc.Component,

    properties: {
        playerName: 'Phat Ben',
        health: 0,
        score: 0,
        scoreLabel: cc.Label,
        healthLabel: cc.Label,
    },

    onLoad () {
        this.updateLabels();
    },

    updateLabels() {
        this.scoreLabel.string = 'Score: ' + this.score;
        this.healthLabel.string = 'HP: ' + this.health;
    },

    addPoint() {
        this.score ++;
        if (this.score % 10 === 0) {
            this.health += 1;
        }

        this.updateLabels();
    },
});
