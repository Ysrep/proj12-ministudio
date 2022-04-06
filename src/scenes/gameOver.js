var ex;

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }

  preload() {
    this.load.image('GO', 'src/assets/sprite/gameOver/gameover.png');
    this.load.image('retry', 'src/assets/sprite/gameOver/retry.png');
    this.load.image('pressEnter', 'src/assets/sprite/gameOver/pressEnter.png');
  }

  create() {
    this.add.image(540, 300, 'GO').setScale(0.1);
    this.add.image(540, 600, 'retry');
    this.add.image(540, 635, 'pressEnter');

    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.start("Map");
    }
  }
}