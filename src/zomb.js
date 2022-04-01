

class Zomb extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'zomb', { key: "zomb" });
    this.startX = x;
    this.startY = y;
    this.speed = 0.01;
  }
  update() {
    this.x += (dude.x - this.x) * this.speed;
    this.y += (dude.y - this.y) * this.speed;
  }
}