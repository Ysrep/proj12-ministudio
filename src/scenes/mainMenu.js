var exit;

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  preload() {
    this.load.image('main', 'src/assets/sprite/menu/main.jpg');
    this.load.image('background', 'src/assets/sprite/menu/fond_menu.png');
    this.load.image('start', 'src/assets/sprite/menu/startButton.png');
    this.load.image('logo', 'src/assets/sprite/menu/ZOMBIE_PARC.png');
    this.load.audio('bread', [
      'src/assets/SFX/bread.mp3'
    ]);
  }

  create() {
    this.add.image(540, 360, 'main');
    this.add.image(540, 360, 'background').setScale(1.1);
    this.add.image(540, 350, 'logo').setScale(2);
    this.add.image(540, 600, 'start');
    //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    //var text = this.add.text(315, 600, "~Press Any Key for Start~", style);
    //text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    var music = this.sound.add('bread');
    this.sound.pauseOnBlur = false;
    //music.play();
  }

  update() {

    this.input.keyboard.on('keyup', function (e) {
      if (e.key == 0 && exit != 1) {
        exit = 1;
        this.scene.start("Map");
      }
    }, this);
  }
}