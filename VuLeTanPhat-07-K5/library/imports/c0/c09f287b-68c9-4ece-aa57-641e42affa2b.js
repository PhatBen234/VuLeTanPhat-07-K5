"use strict";
cc._RF.push(module, 'c09f2h7aMlOzqpXZB5Cr/or', 'AddItem');
// Day1/Bai11/Data/AddItem.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        addItemButton: cc.Button,
        showItemsButton: cc.Button
    },

    onLoad: function onLoad() {
        this.items = ["Sword", "Shield", "Potion"];

        // Biến chứa item sẽ thêm, có thể thay đổi trong code
        this.nextItemToAdd = "Helmet";

        this.addItemButton.node.on('click', this.addItem, this);
        this.showItemsButton.node.on('click', this.showItems, this);
    },
    addItem: function addItem() {
        if (this.nextItemToAdd) {
            this.items.push(this.nextItemToAdd);
            console.log("\u0110\xE3 th\xEAm v\u1EADt ph\u1EA9m: " + this.nextItemToAdd);
        } else {
            console.warn("Chưa gán biến nextItemToAdd");
        }
    },
    showItems: function showItems() {
        console.log("Danh sách vật phẩm:", this.items);
    }
});

cc._RF.pop();