// Inventory.js

cc.Class({
  extends: cc.Component,

  properties: {
    holder: cc.Node, // Nơi chứa các item prefab
    itemPrefab: cc.Prefab, // Prefab của Item
    infoPanel: cc.Node, // Panel thông tin
    iconList: [cc.SpriteFrame], // List icon cho các item (ví dụ 2 item)
  },

  onLoad() {
    // Định nghĩa các item data (bao gồm tất cả các thông tin cần thiết)
    this.itemsData = [
      {
        name: "Thuốc hồi máu",
        quantity: 5,
        icon: this.iconList[0], // Đổi cho phù hợp với danh sách icon
        type: "consumable",
        effect: "Hồi 20 máu",
      },
      {
        name: "Kiếm sắt",
        quantity: 1,
        icon: this.iconList[1], // Đổi cho phù hợp với danh sách icon
        type: "equipment",
        effect: "Tăng 10 sức mạnh",
      },
    ];

    this.spawnItems();
  },

  spawnItems() {
    console.log("Spawning items..."); // Kiểm tra khi spawn items
    this.itemsData.forEach((itemData) => {
      const itemNode = cc.instantiate(this.itemPrefab);
      itemNode.parent = this.holder;

      // Gửi data cho từng item để hiển thị
      itemNode.emit("INIT_DATA_NEW", itemData, this);
      console.log("Item spawned:", itemData.name); // Kiểm tra dữ liệu mỗi item
    });
  },

  itemClick(itemData) {
    console.log("Item clicked:", itemData.name); // Kiểm tra khi click vào item
    // Khi click, hiển thị thông tin vào InfoPanel
    this.showItemInfo(itemData);
  },

  showItemInfo(itemData) {
    console.log("Displaying item info:", itemData); // Kiểm tra khi cập nhật thông tin item lên panel

    // Cập nhật thông tin lên panel
    this.infoPanel.getChildByName("NameLabel").getComponent(cc.Label).string =
      itemData.name;
    this.infoPanel
      .getChildByName("QuantityLabel")
      .getComponent(cc.Label).string = "x" + itemData.quantity;
    this.infoPanel.getChildByName("EffectLabel").getComponent(cc.Label).string =
      itemData.effect;

    const useButton = this.infoPanel.getChildByName("UseButton");
    const deleteButton = this.infoPanel.getChildByName("DeleteButton");

    // Xử lý logic cho nút Sử dụng và Xóa (truyền theo itemData để xử lý)
    useButton.getComponent(cc.Button).clickEvents[0].handler =
      this.useItem.bind(this, itemData);
    deleteButton.getComponent(cc.Button).clickEvents[0].handler =
      this.deleteItem.bind(this, itemData);
  },

  useItem(itemData) {
    console.log("Using item:", itemData.name); // Kiểm tra khi sử dụng item
    // Xử lý khi sử dụng item
    if (itemData.type === "consumable") {
      itemData.quantity -= 1; // Giảm số lượng
      if (itemData.quantity <= 0) {
        this.deleteItem(itemData); // Nếu hết thì xóa
      }
    } else if (itemData.type === "equipment") {
      this.infoPanel
        .getChildByName("EffectLabel")
        .getComponent(cc.Label).string = `Đã trang bị ${itemData.name}`;
    }

    this.updateItemDisplay(itemData); // Cập nhật lại UI item
  },

  deleteItem(itemData) {
    console.log("Deleting item:", itemData.name); // Kiểm tra khi xóa item
    // Xóa item khỏi danh sách và cập nhật UI
    const index = this.itemsData.indexOf(itemData);
    if (index !== -1) {
      this.itemsData.splice(index, 1);
      this.updateItemDisplay(itemData); // Cập nhật lại UI item
    }
  },

  updateItemDisplay(itemData) {
    console.log("Updating item display:", itemData.name); // Kiểm tra khi cập nhật hiển thị
    // Cập nhật UI sau khi thay đổi item (ví dụ giảm quantity, xóa item)
    const itemNode = this.holder.getChildByName(itemData.name);
    if (itemNode) {
      itemNode.getChildByName("QuantityLabel").getComponent(cc.Label).string =
        "x" + itemData.quantity;
      if (itemData.quantity <= 0) {
        itemNode.destroy(); // Nếu quantity bằng 0, xóa item
      }
    }
  },
});
