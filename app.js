
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

    if (cursor.up.isDown) {
      this.y -= 5;
    }
    if (cursor.down.isDown) {
      this.y += 5;
    }
    if (cursor.left.isDown) {
      this.x -= 5;
    }
    if (cursor.right.isDown) {
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
    this.load.atlas('isoblocks', 'assets/mediumSus.png', 'sus.json');
  }

  create() {
    var mapWidth = 40;
    var mapHeight = 40;

    var tileWidthHalf = 20;
    var tileHeightHalf = 12;

    var centerX = (mapWidth / 2) * tileWidthHalf;
    var centerY = -100;

    var blocks = [];
    scene = this;
    dude = this.add.existing(new Dude(this, 100, 100));

    for(let i=0; i < 5; i++){
      zombs.push(this.add.existing(new Zomb(this, Math.random() * 800, Math.random() * 500, dude)));
    }

    dude.setDepth(1);
    
    for (var y = 0; y < mapHeight; y++)
    {
        for (var x = 0; x < mapWidth; x++)
        {
            var tx = (x - y) * tileWidthHalf;
            var ty = (x + y) * tileHeightHalf;

            var block = (x % 2 === 0) ? 'block-125' : 'block-132';

            var tile = this.add.image(centerX + tx, centerY + ty, 'isoblocks', block);

            tile.setData('row', x);
            tile.setData('col', y);

            tile.setDepth(0);

            blocks.push(tile);
        }
    }

    this.cameras.main.zoom = 0.62;
    this.cameras.main.scrollX = -110;
    for (let i = 0; i < 5; i++) {
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

    this.input.keyboard.on('keyup', function(e) {
      if (e.key == 2) {
        this.scene.start("Example2");
      }
    }, this );
  }
}
class Example2 extends Phaser.Scene {
  constructor() {
    super({key:"Example2"});
  }

  create() {
    this.text = this.add.text(0,0,"Welcome", { font:"40px Impact"});
  }
}


const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-example',
  scene: [Example, Example2]
};

var game = new Phaser.Game(config);