
var zombs = [];
var dude;
var scene;
var cursor = [];


class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara');

    this.startX = x;
    this.startY = y;
  }

  
  

  update() {

    if (cursor.up.isDown){
      this.y -= 5;
    }
    if (cursor.down.isDown){
      this.y += 5;
    }
    if (cursor.left.isDown){
      this.x -= 5;
    }
    if (cursor.right.isDown){
      this.x += 5;
    }
    
    
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
    for(let i=0; i < 5; i++){
      zombs.push(this.add.existing(new Zomb(this, Math.random() * 800, Math.random() * 500, dude)));
    }
    this.sound.pauseOnBlur = false;

    var music = this.sound.add('bread');
    cursor = this.input.keyboard.createCursorKeys()
    console.log(cursor);
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
  parent: 'phase-example',
  scene: [Example]
};

var game = new Phaser.Game(config);