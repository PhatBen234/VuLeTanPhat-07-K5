cc.Class({
  extends: cc.Component,

  properties: {
    itemJson: cc.JsonAsset, // Tải file json chứa dữ liệu item
  },

  onLoad() {
    this.items = []; // Khởi tạo danh sách item
    this.loadItems(); // Load item khi khởi tạo
  },

  loadItems() {
    cc.log("Bắt đầu load dữ liệu item...");

    // Giả sử itemJson chứa dữ liệu JSON dạng [{id, name, icon, type, quantity}]
    if (this.itemJson) {
      this.items = this.itemJson.json;
      cc.log("Dữ liệu item load thành công:", this.items);

      // Phát tín hiệu khi items đã được load thành công
      this.node.emit("ItemsLoaded", this.items);
    } else {
      cc.error("Không tìm thấy dữ liệu itemJson!");
    }
  },

  getItems() {
    return this.items;
  },
});
