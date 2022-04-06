class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  preload() {
    this.load.image('main', 'src/assets/sprite/menu/main.jpg');
    this.load.image('background', 'src/assets/sprite/menu/fond_menu.png');
    this.load.image('start', 'src/assets/sprite/menu/startButton.png');
    this.load.image('logo', 'src/assets/sprite/menu/ZOMBIE_PARC.png');
    this.load.audio('menu', [
      'src/assets/SFX/menu.mp3'
    ]);
  }

  create() {
    this.add.image(540, 360, 'main');
    this.add.image(540, 360, 'background').setScale(1.1);
    this.add.image(540, 350, 'logo').setScale(2);
    this.add.image(540, 600, 'start');

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.musicM = this.sound.add('menu');
    this.sound.pauseOnBlur = false;
    this.musicM.play();
    this.musicM.setVolume(0.15);
    this.musicM.setLoop(true);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.scene.start("Map");
      this.musicM.stop();
    }
  }
}