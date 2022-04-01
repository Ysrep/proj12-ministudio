var cursor = [];
var moveok;

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara', { key: "dude" });
    this.startX = x;
    this.startY = y;
  }

  update(cursor, moveok, dude) {
    if (moveok === false) {
      dude.setVelocityX(0);
      dude.setVelocityY(0);
    }else if (cursor.up.isDown) {
      dude.setVelocityY(-160);
    }else if (cursor.down.isDown) {
      dude.setVelocityY(160);
    }else if (cursor.left.isDown) {
      dude.setVelocityX(-160);
    }
    else if (cursor.right.isDown) {
      dude.setVelocityX(160);
    }
    moveok = true;
    zombs.forEach(function (zomb) {
      zomb.update();
    });
  }
}