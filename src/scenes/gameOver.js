var ex;
var style = { font: "bold 25px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
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

    highScoreText = this.add.text(690, 165, 'highScore: ' , style).setScrollFactor(0);
   
    
  }

  update() {
    for (let i = 0; i <= 10; i++) {
      highScoreText.setText('highScore: '+highScore[i]);
    }
    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.start("Map");
    }
  }
}