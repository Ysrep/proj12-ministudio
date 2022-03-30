var cursor = [];

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara', { key: "dude" });
    this.startX = x;
    this.startY = y;

    this.speed = 2;
    this.dx;
    this.dy;
  }

  update(cursor) {
    if (cursor.up.isDown) {
      this.dy = -1;
      this.y += this.dy*this.speed;
    }
    if (cursor.down.isDown) {
      this.dy = +1;
      this.y += this.dy*this.speed;
    }
    if (cursor.left.isDown) {
      this.dx = -1;
      this.x += this.dx*this.speed;
    }
    if (cursor.right.isDown) {
      this.dx = 1;
      this.x += this.dx*this.speed;
    }
  }
}