var exit;

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  preload() {
    this.load.image('main', 'src/assets/sprite/menu/main.jpg');
    this.load.image('logo', 'src/assets/sprite/menu/logo.png');
    this.load.audio('bread', [
      'src/assets/SFX/bread.mp3'
    ]);
  }

  create() {
    var bg = this.add.tileSprite(512, 384, 1024, 768, 'main');
    var lg = this.add.image(512, 300, 'logo');
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = this.add.text(315, 600, "~Press Any Key for Start~", style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    var music = this.sound.add('bread');
    this.sound.pauseOnBlur = false;
    music.play();
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