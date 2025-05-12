cc.Class({
  extends: cc.Component,

  properties: {
    holder: cc.Node,
    itemPrefab: cc.Prefab,
    previewIcon: cc.Sprite,
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    typeLabel: cc.Label,
    effectLabel: cc.Label,
    useButton: cc.Button,
    deleteButton: cc.Button,
    equipStatusLabel: cc.Label,

    healing_icon: cc.SpriteFrame,
    sword_icon: cc.SpriteFrame,
  },

  onLoad() {
    console.log("[Inventory] onLoad");

    this.itemConfigs = [
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
      {
        key: "mana_potion",
        name: "Bình mana",
        quantity: 3,
        type: "consumable",
        effect: "Hồi 15 mana",
        icon: this.healing_icon,
      },
      {
        key: "shield",
        name: "Khiên Gỗ",
        quantity: 1,
        type: "equipment",
        effect: "Tăng 5 giáp",
        icon: this.sword_icon,
      },
      {
        key: "elixir",
        name: "Thuốc hồi sinh",
        quantity: 2,
        type: "consumable",
        effect: "Hồi sinh ngay khi chết",
        icon: this.healing_icon,
      },
      {
        key: "dagger",
        name: "Dao găm",
        quantity: 1,
        type: "equipment",
        effect: "Tăng tốc độ tấn công",
        icon: this.sword_icon,
      },
      {
        key: "bomb",
        name: "Bom khói",
        quantity: 4,
        type: "consumable",
        effect: "Làm mù kẻ địch",
        icon: this.healing_icon,
      },
      {
        key: "helmet",
        name: "Mũ sắt",
        quantity: 1,
        type: "equipment",
        effect: "Tăng phòng thủ đầu",
        icon: this.sword_icon,
      },
      {
        key: "fire_scroll",
        name: "Cuộn lửa",
        quantity: 2,
        type: "consumable",
        effect: "Gây sát thương lửa",
        icon: this.healing_icon,
      },
    ];

    this.itemList = {};
    this.selectedItem = null;

    this.useButton.node.on("click", this.onUseItem, this);
    this.deleteButton.node.on("click", this.onDeleteItem, this);
  },

  start() {
    console.log("[Inventory] start");

    // Ẩn label trạng thái trang bị khi bắt đầu
    this.equipStatusLabel.node.opacity = 0;

    this.spawnItems();
  },

  spawnItems() {
    console.log("[Inventory] spawnItems bắt đầu");

    for (let itemData of this.itemConfigs) {
      console.log(`[Inventory] Tạo item: ${itemData.key}`);

      const itemNode = cc.instantiate(this.itemPrefab);
      itemNode.parent = this.holder;

      const itemScript = itemNode.getComponent("Item");
      if (itemScript) {
        itemScript.initItem(itemData, this);
      } else {
        console.log(
          `[Inventory] Không tìm thấy component "Item" trong node: ${itemData.key}`
        );
      }

      this.itemList[itemData.key] = {
        node: itemNode,
        script: itemScript,
      };
    }

    console.log("[Inventory] spawnItems kết thúc");
  },

  onItemClick(itemData) {
    console.log("[Inventory] onItemClick:", itemData);

    this.selectedItem = itemData;

    this.previewIcon.spriteFrame = itemData.icon;
    this.nameLabel.string = itemData.name;
    this.quantityLabel.string = `Số lượng: ${itemData.quantity}`;
    this.typeLabel.string = `Loại: ${itemData.type}`;
    this.effectLabel.string = itemData.effect;
  },

  onUseItem() {
    if (!this.selectedItem) return;

    const item = this.selectedItem;
    console.log("[Inventory] onUseItem:", item);

    if (item.type === "consumable") {
      item.quantity--;
      console.log(`[Inventory] Dùng consumable, còn lại: ${item.quantity}`);

      if (item.quantity <= 0) {
        this.removeItem(item.key);
      } else {
        this.quantityLabel.string = `Số lượng: x${item.quantity}`;

        const entry = this.itemList[item.key];
        if (entry && entry.script) {
          entry.script.updateQuantity(item.quantity);
        }
      }
    } else if (item.type === "equipment") {
      this.removeItem(item.key);
      this.showEquipStatus(`Đã trang bị: ${item.name}`);
    }
  },

  onDeleteItem() {
    if (!this.selectedItem) return;
    console.log("[Inventory] onDeleteItem:", this.selectedItem.key);
    this.removeItem(this.selectedItem.key);
  },

  removeItem(key) {
    console.log("[Inventory] removeItem:", key);

    const entry = this.itemList[key];
    if (entry && entry.node) {
      entry.node.destroy();
    }

    delete this.itemList[key];

    this.previewIcon.spriteFrame = null;
    this.nameLabel.string = "";
    this.quantityLabel.string = "";
    this.typeLabel.string = "";
    this.effectLabel.string = "";

    this.selectedItem = null;
  },

  showEquipStatus(text) {
    console.log("[Inventory] showEquipStatus:", text);

    this.equipStatusLabel.string = text;
    this.equipStatusLabel.node.opacity = 255;
    this.equipStatusLabel.node.stopAllActions();
    this.equipStatusLabel.node.runAction(
      cc.sequence(cc.delayTime(2), cc.fadeOut(1))
    );
  },
});
