const dataItem = cc.Class({
    name: "dataItem",
    properties: {
        keyItem: "",
        image2: cc.SpriteFrame,
    },
});
cc.Class({
    extends: cc.Component,

    properties: {
        holder: cc.Node,
        item: cc.Prefab,
        image2: cc.Sprite,
        listData: {
            default: [],
            type: dataItem,
        },
    },


    onLoad() {
        this.node.on("ON_ITEM_CLICK", this.itemClick, this);
        this.dataString = [
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
            { keyItem: "S", quantity: 12, },
        ]
    },

    start() {
        this.list = {};
        for (let i = 0; i < this.listData.length; i++) {
            const data = this.listData[i]
            const item = cc.instantiate(this.item);
            item.parent = this.holder;
            item.emit("INIT_DATA_NEW", data,this)
            this.list[data.keyItem] = item;
        }
    },

    itemClick(data) {
        // event.stopPropagation();
        // const data = event.getUserData();
        // cc.log("itemClick", this.list);
         this.image2.spriteFrame = data.image2;

    },

    useItem(keyItem) {
        const item = this.list[keyItem];
        item.destroy();
    },
    changeBG(keyItem) {
        Object.keys(this.list).forEach(key => {
            const item = this.list[key];
            if (key == keyItem) {
                //changColor
            } else {
                //resetColor
            }
        });
    }
    // update (dt) {},
});
