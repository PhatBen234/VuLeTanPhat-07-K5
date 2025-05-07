cc.Class({
    extends: cc.Component,

    properties: {
        addItemButton: cc.Button,
        showItemsButton: cc.Button,
    },

    onLoad () {
        this.items = ["Sword", "Shield", "Potion"];

        // Biến chứa item sẽ thêm, có thể thay đổi trong code
        this.nextItemToAdd = "Helmet";

        this.addItemButton.node.on('click', this.addItem, this);
        this.showItemsButton.node.on('click', this.showItems, this);
    },

    addItem () {
        if (this.nextItemToAdd) {
            this.items.push(this.nextItemToAdd);
            console.log(`Đã thêm vật phẩm: ${this.nextItemToAdd}`);
        } else {
            console.warn("Chưa gán biến nextItemToAdd");
        }
    },

    showItems () {
        console.log("Danh sách vật phẩm:", this.items);
    }
});
