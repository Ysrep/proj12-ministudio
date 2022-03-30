var cursor = [];

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara');

    this.startX = x;
    this.startY = y;

  }
  update() {

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

class Zomb extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'zomb');

    this.startX = x;
    this.startY = y;

    this.speed = 0.01;
  }

  update() {

    this.x += (dude.x - this.x) * this.speed;
    this.y += (dude.y - this.y) * this.speed;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-example',
  scene: [MainMenu, Example, Example2]
};

var game = new Phaser.Game(config);