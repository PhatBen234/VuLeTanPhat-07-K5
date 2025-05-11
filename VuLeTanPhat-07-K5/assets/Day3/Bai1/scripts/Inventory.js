const ItemData = cc.Class({
  name: "ItemData",
  properties: {
    key: "", // Key của item
    icon: cc.SpriteFrame, // Icon của item
  },
});

cc.Class({
  extends: cc.Component,

  properties: {
    holder: cc.Node,
    itemPrefab: cc.Prefab,
    previewIcon: cc.Sprite,
    itemConfigs: {
      default: [],
      type: ItemData,
    },
  },

  onLoad() {
    console.log("[InventoryDisplay] onLoad: Khởi tạo dữ liệu");

    this.itemList = {};

    this.spawnData = [
      { key: "S", quantity: 12 },
      { key: "W", quantity: 10 },
      { key: "E", quantity: 5 },
    ];
  },

  start() {
    console.log("[InventoryDisplay] start: Gọi spawnItems()");
    this.spawnItems();
  },

  spawnItems() {
    for (let data of this.spawnData) {
      console.log(
        `[InventoryDisplay] spawn item ${data.key} x${data.quantity}`
      );

      const config = this.itemConfigs.find((c) => c.key === data.key);
      if (!config) {
        cc.warn(
          `[InventoryDisplay] Không tìm thấy config cho key: ${data.key}`
        );
        continue;
      }

      const itemData = {
        key: data.key,
        quantity: data.quantity,
        icon: config.icon,
      };

      const itemNode = cc.instantiate(this.itemPrefab);
      itemNode.parent = this.holder;

      console.log(
        `[InventoryDisplay] Emit INIT_ITEM_DATA tới node ${
          itemNode.name || "(chưa có tên)"
        }`
      );
      itemNode.emit("INIT_ITEM_DATA", itemData, this);

      this.itemList[data.key] = itemNode;
    }
  },

  onItemClick(itemData) {
    console.log("[InventoryDisplay] onItemClick nhận được:", itemData);

    if (!this.previewIcon) {
      console.warn("[InventoryDisplay] previewIcon chưa được gán!");
      return;
    }

    this.previewIcon.spriteFrame = itemData.icon;
  },

  useItem(key) {
    console.log("[InventoryDisplay] useItem:", key);

    const node = this.itemList[key];
    if (node) {
      node.destroy();
      delete this.itemList[key];
    }
  },
});
