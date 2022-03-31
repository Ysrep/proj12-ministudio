var cursor = [];

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara', { key: "dude" });
    this.startX = x;
    this.startY = y;
  }
  update(cursor) {
    if (cursor.up.isDown) {
      this.y -= 5;
    }
    if (cursor.down.isDown) {
      this.y += 5;
    }
    if (cursor.left.isDown) {
      this.x -= 5;
    }
    if (cursor.right.isDown) {
      this.x += 5;
    }
  }
}