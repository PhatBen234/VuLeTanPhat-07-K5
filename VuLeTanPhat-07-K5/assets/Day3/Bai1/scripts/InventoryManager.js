cc.Class({
  extends: cc.Component,

  properties: {
    healing_icon: cc.SpriteFrame,
    sword_icon: cc.SpriteFrame,
  },

  onLoad() {
    this.itemData = {};
  },

  getInitialItems() {
    return [
      {
        key: "healing_potion",
        name: "Bình máu nhỏ",
        quantity: 5,
        type: "consumable",
        effect: "Hồi 20 máu",
        icon: this.healing_icon,
      },
      {
        key: "sword",
        name: "Kiếm Sắt",
        quantity: 1,
        type: "equipment",
        effect: "Tăng 10 sức mạnh",
        icon: this.sword_icon,
      },
    ];
  },

  loadInitialItems() {
    const items = this.getInitialItems();
    for (let item of items) {
      this.itemData[item.key] = item;
    }
  },

  addItem(item) {
    const { key } = item;
    if (this.itemData[key]) return false;

    this.itemData[key] = item;
    return true;
  },

  useItem(key) {
    const item = this.itemData[key];
    if (!item) return null;

    if (item.type === "consumable") {
      item.quantity--;
      if (item.quantity <= 0) {
        delete this.itemData[key];
        return { removed: true, item };
      } else {
        return { removed: false, item };
      }
    } else if (item.type === "equipment") {
      delete this.itemData[key];
      return { removed: true, item, equipped: true };
    }
  },

  deleteItem(key) {
    if (!this.itemData[key]) return false;
    delete this.itemData[key];
    return true;
  },

  getItem(key) {
    return this.itemData[key];
  },

  getAllItems() {
    return Object.values(this.itemData);
  },
});
