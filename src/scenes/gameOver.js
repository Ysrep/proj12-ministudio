var ex;
var style = { font: "bold 80px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "GameOver" });
  }

  preload() {
    this.load.image('GO', 'src/assets/sprite/gameOver/gameover.png');
    this.load.image('retry', 'src/assets/sprite/gameOver/retry.png');
    this.load.image('pressEnter', 'src/assets/sprite/gameOver/pressEnter.png');
    this.load.image('score', 'src/assets/sprite/gameOver/score.png');
  }

  create() {
    this.add.image(300, 300, 'GO').setScale(0.1);
    this.add.image(800, 275, 'score');
    this.add.image(540, 600, 'retry');
    this.add.image(540, 635, 'pressEnter');
    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    highScoreText = this.add.text(675, 300, '' , style);
  }

  update() {
    
    
    highScoreText.setText(localStorage.getItem('Score'));
    
    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.start("Map"); 
    }
  }
}