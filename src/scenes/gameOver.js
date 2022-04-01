var ex;

class GameOver extends Phaser.Scene {
    constructor() {
      super({key:"GameOver"});
    }
  
    preload() {
        this.load.image('GO', 'src/assets/sprite/gameover.png');
        this.load.image('retry', 'src/assets/sprite/retry.png');
    }
    
    create() {
        this.add.image(512, 300, 'GO').setScale(0.1); 
        this.add.image(512, 600, 'retry');
    }
  
    update() {
      this.input.keyboard.on('keyup', function (e) {
        if (e.key == 0 && ex != 1) {
          ex = 1;
          this.scene.start("MainMenu");
        }
      }, this);
    }
  }