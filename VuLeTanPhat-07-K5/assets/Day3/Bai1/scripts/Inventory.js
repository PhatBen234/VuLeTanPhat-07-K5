cc.Class({
  extends: cc.Component,

  properties: {
    content: cc.Node, // Content của ScrollView (Holder)
    itemPrefab: cc.Prefab, // Prefab của item
    iconList: [cc.SpriteFrame], // Mảng 2 hình ảnh icon

    // Các label hiển thị chi tiết
    nameLabel: cc.Label,
    quantityLabel: cc.Label,
    effectLabel: cc.Label,
    equipStatusLabel: cc.Label,

    useButton: cc.Button,
    deleteButton: cc.Button,
  },

  onLoad() {
    // Dữ liệu mẫu
    this.itemDataList = [
      {
        name: "Potion",
        quantity: 3,
        type: "consumable",
        effect: "Hồi 20 máu",
        iconIndex: 0,
      },
      {
        name: "Kiếm Sắt",
        quantity: 1,
        type: "equipment",
        effect: "Tăng 10 sức mạnh",
        iconIndex: 1,
      },
    ];

    this.spawnItems();
  },

  spawnItems() {
    this.content.removeAllChildren();
    this.itemDataList.forEach((data) => {
      const item = cc.instantiate(this.itemPrefab);
      item.parent = this.content;
      item.emit("INIT_DATA_NEW", data, this);
    });
  },

  itemClick(data) {
    // Hiển thị thông tin chi tiết
    this.selectedData = data;
    this.nameLabel.string = data.name;
    this.quantityLabel.string = "x" + data.quantity;
    this.effectLabel.string = data.effect;
    this.equipStatusLabel.string = "";

    // Kích hoạt nút
    this.useButton.node.active = true;
    this.deleteButton.node.active = true;
  },

  onClickUse() {
    if (!this.selectedData) return;

    const data = this.selectedData;
    if (data.type === "consumable") {
      data.quantity--;
      if (data.quantity <= 0) {
        this.removeItem(data);
      } else {
        this.spawnItems(); // cập nhật lại
      }
    } else if (data.type === "equipment") {
      this.equipStatusLabel.string = "Đã trang bị " + data.name;
      this.removeItem(data);
    }
  },

  onClickDelete() {
    if (!this.selectedData) return;
    this.removeItem(this.selectedData);
  },

  removeItem(data) {
    const index = this.itemDataList.indexOf(data);
    if (index !== -1) {
      this.itemDataList.splice(index, 1);
    }
    this.selectedData = null;
    this.spawnItems();

    // Reset hiển thị
    this.nameLabel.string = "";
    this.quantityLabel.string = "";
    this.effectLabel.string = "";
    this.equipStatusLabel.string = "";
  },
});
