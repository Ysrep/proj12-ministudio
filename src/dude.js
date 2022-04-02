export default class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, hp);
    this.startX = x;
    this.startY = y;
    this.hp = 5;

    scene.add.existing(this)
  }

  preload() {
    this.load.image('mainChar', 'src/assets/sprite/cara.png');
  }

  create() {
    this.charaDesign = this.add.image(this.x, this.y, 'mainChar');
    this.cursor = this.input.keyboard.createCursorKeys();
  }

  Move() {
    const UP = this.cursor.up.isDown;
    const DOWN = this.cursor.down.isDown;
    const LEFT = this.cursor.left.isDown;
    const RIGHT = this.cursor.right.isDown;

    if (UP) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityY(-160);
    }
    else if (DOWN) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityY(160);
    }
    else if (LEFT) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityX(-160);
    }
    else if (RIGHT) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityX(160);
    }
    else {
      this.setVelocityX(0);
      this.setVelocityY(0);
    }
  }

  update() {
    this.hp = 2;
  }
}