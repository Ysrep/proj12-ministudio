

class Zomb extends Phaser.GameObjects.Image {
  constructor(scene, x, y, hp) {
    super(scene, x, y, 'zomb', { key: "zomb" });
    this.startX = x;
    this.startY = y;
    hp = 2;
    this.speed = 0.01;
  }

  create() {
    this.physics.add.collider(zombs, zombs[i], function () {
    });
  }
  update() {
    this.x += (dude.x - this.x) * this.speed;
    this.y += (dude.y - this.y) * this.speed;
  }
}