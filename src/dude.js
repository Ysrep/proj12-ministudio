var cursor = [];

class HealthBar {

  constructor (scene, x, y)
  {
      this.bar = new Phaser.GameObjects.Graphics(scene);

      this.x = x;
      this.y = y;
      this.value = 100;
      this.p = 76 / 100;

      this.draw();

      scene.add.existing(this.bar);
  }

  decrease (amount)
  {
      this.value -= amount;

      if (this.value < 0)
      {
          this.value = 0;
      }

      this.draw();

      return (this.value === 0);
  }

  draw ()
  {
      this.bar.clear();

      //  BG
      this.bar.fillStyle(0x000000);
      this.bar.fillRect(this.x, this.y, 80, 16);

      //  Health

      this.bar.fillStyle(0xffffff);
      this.bar.fillRect(this.x + 2, this.y + 2, 76, 12);

      if (this.value < 30)
      {
          this.bar.fillStyle(0xff0000);
      }
      else
      {
          this.bar.fillStyle(0x00ff00);
      }

      var d = Math.floor(this.p * this.value);

      this.bar.fillRect(this.x + 2, this.y + 2, d, 12);
  }

}

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