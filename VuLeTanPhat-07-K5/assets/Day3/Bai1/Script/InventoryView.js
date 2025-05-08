cc.Class({
  extends: cc.Component,

  properties: {
    contentNode: cc.Node, // Node chứa các item slot
    useButton: cc.Button, // Button dùng item
    removeButton: cc.Button, // Button xóa item
    nameLabel: cc.Label, // Label tên item
    quantityLabel: cc.Label, // Label số lượng item
    typeLabel: cc.Label, // Label loại item
    effectLabel: cc.Label, // Label hiệu ứng item
    iconSprite: cc.Sprite, // Sprite hiển thị icon của item
    itemSlotPrefab: cc.Prefab, // Prefab của item slot
  },

  onLoad() {
    cc.log("InventoryView onLoad");

    // Kiểm tra các thuộc tính trong console
    cc.log("useButton:", this.useButton);
    cc.log("removeButton:", this.removeButton);
    cc.log("nameLabel:", this.nameLabel);
    cc.log("quantityLabel:", this.quantityLabel);
    cc.log("typeLabel:", this.typeLabel);
    cc.log("effectLabel:", this.effectLabel);
    cc.log("iconSprite:", this.iconSprite);
    cc.log("contentNode:", this.contentNode);
    cc.log("itemSlotPrefab:", this.itemSlotPrefab);

    // Đăng ký sự kiện cho buttons
    if (this.useButton) {
      this.useButton.node.on("click", this.onUseButtonClick, this);
    }

    if (this.removeButton) {
      this.removeButton.node.on("click", this.onRemoveButtonClick, this);
    }
  },

  showItemList(items) {
    cc.log("Hiển thị danh sách items:", items);

    // Đảm bảo contentNode tồn tại
    if (this.contentNode) {
      this.contentNode.removeAllChildren();

      items.forEach((item, index) => {
        const itemSlot = cc.instantiate(this.itemSlotPrefab); // Gán đúng prefab
        if (itemSlot) {
          itemSlot.getComponent("ItemSlot").setItem(item, index);
          this.contentNode.addChild(itemSlot);
        } else {
          cc.error("Prefab itemSlot không tồn tại!");
        }
      });
    } else {
      cc.error("contentNode không tồn tại!");
    }
  },

  showItemDetail(item) {
    cc.log("Hiển thị chi tiết item:", item);

    if (this.nameLabel) {
      this.nameLabel.string = item.name;
    }
    if (this.quantityLabel) {
      this.quantityLabel.string = "Số lượng: " + item.quantity;
    }
    if (this.typeLabel) {
      this.typeLabel.string = "Loại: " + item.type;
    }
    if (this.effectLabel) {
      this.effectLabel.string = "Hiệu ứng: " + item.effect;
    }

    // Đảm bảo iconSprite đã được gán đúng
    if (this.iconSprite) {
      cc.loader.loadRes(
        `icons/${item.icon}`,
        cc.SpriteFrame,
        (err, spriteFrame) => {
          if (err) {
            cc.error("Không tìm thấy icon:", item.icon);
            return;
          }
          this.iconSprite.spriteFrame = spriteFrame;
        }
      );
    }
  },

  clearDetail() {
    // Clear detail UI khi không còn item nào được chọn
    if (this.nameLabel) {
      this.nameLabel.string = "";
    }
    if (this.quantityLabel) {
      this.quantityLabel.string = "";
    }
    if (this.typeLabel) {
      this.typeLabel.string = "";
    }
    if (this.effectLabel) {
      this.effectLabel.string = "";
    }
    if (this.iconSprite) {
      this.iconSprite.spriteFrame = null;
    }
  },

  // Xử lý sự kiện khi nhấn nút "Use"
  onUseButtonClick() {
    cc.log("Use button clicked");
    // Thực hiện hành động khi người chơi dùng item (ví dụ: giảm số lượng, áp dụng hiệu ứng...)
  },

  // Xử lý sự kiện khi nhấn nút "Remove"
  onRemoveButtonClick() {
    cc.log("Remove button clicked");
    // Thực hiện hành động khi người chơi xóa item khỏi inventory
  },
});
