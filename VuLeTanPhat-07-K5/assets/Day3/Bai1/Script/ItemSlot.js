cc.Class({
  extends: cc.Component,

  properties: {
    itemNameLabel: cc.Label, // Gắn label để hiện tên item
    quantityLabel: cc.Label, // Gắn label để hiện số lượng item
    typeLabel: cc.Label, // Gắn label để hiện loại item
    effectLabel: cc.Label, // Gắn label để hiện hiệu ứng của item
    iconSprite: cc.Sprite, // Gắn sprite để hiện icon item
  },

  setItem(itemData, index) {
    this.itemData = itemData;
    this.index = index;

    // Gán dữ liệu lên UI
    this.itemNameLabel.string = itemData.name;
    this.quantityLabel.string = `x${itemData.quantity}`;
    this.typeLabel.string = `Loại: ${itemData.type}`;
    this.effectLabel.string = `Hiệu ứng: ${itemData.effect}`;

    // Tải và gán icon từ resources/icons
    if (this.iconSprite && itemData.icon) {
      cc.loader.loadRes(
        `icons/${itemData.icon}`,
        cc.SpriteFrame,
        (err, spriteFrame) => {
          if (err) {
            cc.error(`Không thể tải icon ${itemData.icon}`);
          } else {
            this.iconSprite.spriteFrame = spriteFrame;
          }
        }
      );
    }

    cc.log(`ItemSlot: Gán item "${itemData.name}" vào vị trí ${index}`);
  },
});
