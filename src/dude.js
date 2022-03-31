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

  update(cursor, moveok) {
    if (moveok === false) {
      this.setVelocityX(0);
      this.setVelocityY(0);
    }else if (cursor.up.isDown) {
      this.setVelocityY(-160);
    }else if (cursor.down.isDown) {
      this.setVelocityY(160);
    }else if (cursor.left.isDown) {
      this.setVelocityX(-160);
    }
    else if (cursor.right.isDown) {
      this.setVelocityX(160);
    }
    moveok = true;
  }
}