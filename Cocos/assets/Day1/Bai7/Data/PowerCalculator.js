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

    onLoad () {
        this.buttonPower.node.on('click', this.calculatePower, this);// neu xai cai on "click thi khong can add truc tiep"
    },

    calculatePower() {
        let hp = parseFloat(this.inputHP.string) || 0;
        let mana = parseFloat(this.inputMana.string) || 0;
        let power = hp * mana;
        this.resultLabel.string = "Power: " + power;
    }
});

//