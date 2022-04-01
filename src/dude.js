var cursor = [];
var moveok;

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara', { key: "dude" });
    this.startX = x;
    this.startY = y;
  }

  preload(){
    this.load.image('cara', 'src/assets/sprite/cara.png');
  }

  create(){
    dude = this.add.image(100,100,'cara');
  }
 

  update(cursor, moveok) {
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