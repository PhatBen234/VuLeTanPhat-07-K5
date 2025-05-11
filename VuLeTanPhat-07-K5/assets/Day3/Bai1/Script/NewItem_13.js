

cc.Class({
    extends: cc.Component,

    properties: {
        image2: cc.Sprite,
        labelNumber: cc.Label,
    },
    onLoad() {
        this.node.on("INIT_DATA_NEW", this.initData, this);
    },
    initData(data,mainClass) {
        const { image2, quantity } = data;
        this.image2.spriteFrame = image2;
        this.labelNumber.string = quantity;
        this.data = data;
        this.mainClass = mainClass;
    },
    onClick() {
        // const customEvent = new cc.Event.EventCustom('ON_ITEM_CLICK', true);
        // customEvent.setUserData({
        //     itemData: this.data,
        // });
        // this.node.dispatchEvent(customEvent);
        this.mainClass.itemClick(this.data);
    },

    onDestroy() {
        this.node.off("INIT_DATA_NEW", this.initData, this);
    }
});
