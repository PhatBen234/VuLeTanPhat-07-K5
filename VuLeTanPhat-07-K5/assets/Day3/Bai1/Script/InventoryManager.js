cc.Class({
  extends: cc.Component,

  properties: {
    model: cc.Node, // Gán node có InventoryModel
    view: cc.Node, // Gán node có InventoryView
  },

  onLoad() {
    // Kiểm tra gán đúng component từ các node model và view
    this.modelComp = this.model.getComponent("InventoryModel");
    this.viewComp = this.view.getComponent("InventoryView");

    // Debug log để kiểm tra xem model và view có được gán đúng không
    cc.log("Model Component:", this.modelComp);
    cc.log("View Component:", this.viewComp);

    // Nếu model hoặc view không được gán đúng, in ra lỗi
    if (!this.modelComp) {
      cc.error("Model component không tồn tại!");
      return;
    }

    if (!this.viewComp) {
      cc.error("View component không tồn tại!");
      return;
    }

    // Đăng ký sự kiện ItemsLoaded
    this.modelComp.node.on("ItemsLoaded", this.onItemsLoaded, this);

    // Gán các sự kiện button cho view
    this.viewComp.useButton.node.on("click", this.onUseItem, this);
    this.viewComp.removeButton.node.on("click", this.onRemoveItem, this);
  },

  onItemsLoaded(items) {
    cc.log("Manager nhận item:", items);
    this.viewComp.showItemList(items);

    // Kiểm tra xem contentNode có tồn tại không
    const content = this.viewComp.contentNode;
    if (content) {
      content.children.forEach((child) => {
        child.on("SelectItem", this.onSelectItem, this);
      });
    } else {
      cc.error("contentNode không tồn tại!");
    }
  },

  onSelectItem(item) {
    this.selectedItem = item;
    cc.log("Đã chọn item:", item);
    this.viewComp.showItemDetail(item);
  },

  onUseItem() {
    if (!this.selectedItem) return;

    cc.log("Sử dụng item:", this.selectedItem.name);

    if (this.selectedItem.type === "consumable") {
      this.selectedItem.quantity -= 1;
      if (this.selectedItem.quantity <= 0) {
        this.removeSelected();
      }
    } else if (this.selectedItem.type === "equipment") {
      cc.log("Đã trang bị:", this.selectedItem.name);
      this.removeSelected();
    }

    this.viewComp.showItemList(this.modelComp.getItems());
    this.viewComp.clearDetail();
  },

  onRemoveItem() {
    if (!this.selectedItem) return;

    cc.log("Xóa item:", this.selectedItem.name);
    this.removeSelected();

    this.viewComp.showItemList(this.modelComp.getItems());
    this.viewComp.clearDetail();
  },

  removeSelected() {
    const index = this.modelComp.items.findIndex(
      (i) => i.id === this.selectedItem.id
    );
    if (index !== -1) {
      this.modelComp.items.splice(index, 1);
      cc.log("Đã xóa item ở index:", index);
    }
    this.selectedItem = null;
  },
});
