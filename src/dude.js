var cursor = []

class Dude extends Phaser.GameObjects.Image {

  constructor(scene, x, y)
  {
    super(scene, x, y, 'cara', { key: "dude" })
    this.startX = x
    this.startY = y
  }

}