class GameOver extends Phaser.Scene {
    constructor() {
      super({key:"GameOver"});
    }
  
    preload() {
        this.load.image('GO', 'src/assets/sprite/gameover.png');
    }
    
    create() {
        this.add.image(512, 384, 'GO').setScale(0.15); 
    }
  
    update() {
          
    }
  }