cc.Class({
    extends: cc.Component,

    properties: {
        titleLabel: cc.Label,
        buttonStart: cc.Button,
        messageLabel: cc.Label,
        buttonExit: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.buttonStart.node.on('click', this.onStartGame,this);
        this.buttonExit.node.on('click', this.onExitGame,this);

    },

    onStartGame(){
        this.messageLabel.string = "Game on";

    },
    onExitGame(){
        this.messageLabel.string = "Bye";
    }

    // update (dt) {},
});
