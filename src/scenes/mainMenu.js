class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  preload() {
    this.load.image('main', 'src/assets/sprite/menu/main.jpg');
    this.load.image('sButton', 'src/assets/sprite/menu/settingsButton.png');
    this.load.spritesheet('startButton', 'src/assets/sprite/menu/startButton.png', { frameWidth: 193, frameHeight: 71 });

    /*this.load.audio('bread', [
      'src/assets/SFX/bread.mp3'
    ]);*/
  }

  create() {
    const bg = this.add.tileSprite(0, 0, 1024, 768, 'main');
    //const stb = this.game.add.button(game.world.centerX - 95, 400, 'startButton', startAction, this, 2, 1, 0);
    //const sb = this.add.image(0, 0, 'sButton');
    //var music = this.sound.add('bread');
    //this.sound.pauseOnBlur = false;
    //music.play();
  }

  update() {
    /*this.input.keyboard.on('keyup', function(e) {
      if (e.key == 2) {
        this.scene.start("Example2");
      }
    }, this );*/
  }

  startAction() {
    this.scene.start("Example");
  } 
}