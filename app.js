
var zombs = [];
var dude;
var scene;

class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y){
    super(scene, x, y, 'cara');
  
    this.startX = x;
    this.startY = y;
  }

  update() {
    this.x += 1;
    this.y += 1;
  }

}

class Zomb extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'zomb');

    this.startX = x;
    this.startY = y;

    this.speed = 0.01;
  }

  update() {

    this.x += (dude.x - this.x) * this.speed;
    this.y += (dude.y - this.y) * this.speed;
  }
}

class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('cara', 'assets/cara.png');
    this.load.image('zomb', 'assets/zomb.png');

    this.load.audio('bread', [
      'assets/bread.mp3'
  ]);
  }

  create() {
    scene = this;
    dude = this.add.existing(new Dude(this, 100, 100));
    zombs.push(this.add.existing(new Zomb(this, 100, 500, dude)));

    this.sound.pauseOnBlur = false;

    var music = this.sound.add('bread');

    music.play();
}

  update() {

    dude.update();

    zombs.forEach(function (zomb) {
      zomb.update();
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 925,
  height: 800,
  backgroundColor: '#ababab',
  parent : 'phase-example',
  scene: [ Example ]
};

const game = new Phaser.Game(config);