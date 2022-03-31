
const map = [
  [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5]
];
var dude;
var cursor = [];
var moveok = true;



class Map1 extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('grass', 'src/assets/sprite/grass.png');
    this.load.image('wall', 'src/assets/sprite/wall.png');
    this.load.image('carac', 'src/assets/sprite/cara.png');
    this.load.image('zomb', 'src/assets/sprite/zomb.png');
  }

  create() {
    var world;
    var isoY;
    var isoX;

    //ude = this.physics.add.sprite(100,100, new Dude(this, 100, 100));
    dude = this.physics.add.sprite(500, 500, 'carac');
    cursor = this.input.keyboard.createCursorKeys()
    dude.setDepth(2)
    for (let i = 0; i < 5; i++) {
      zombs.push(this.add.existing(new Zomb(this, Math.random() * 800, Math.random() * 500, dude)));
      zombs[i].setDepth(1)
    }
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            world = this.add.sprite(500, 500, 'grass');
            break;
          case 1:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          case 2:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          case 3:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          case 4:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          case 5:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          case 6:
            world = this.physics.add.sprite(500, 500, 'wall');
            world.body.pushable = false
            break;
          default:
            break;
        }

        isoX = (800 + r * 20) - (300 + c * 20);
        isoY = ((400 + r * 23) + (300 + c * 23)) / 2;
              
        this.physics.add.collider(dude, world, function () {
          console.log("nike les collisions")
          moveok = false;
        });
             
        // world = this.add.sprite(r * 50, c * 50, 'grass');
        Phaser.Display.Align.In.Center(world, this.add.zone(isoX, isoY, 800, 600));
      }
    }
  }

  update() {
    if (moveok === false) {
      dude.setVelocityX(0);
      dude.setVelocityY(0);
    }else if (cursor.up.isDown) {
      dude.setVelocityY(-160);
    }else if (cursor.down.isDown) {
      dude.setVelocityY(160);
    }else if (cursor.left.isDown) {
      dude.setVelocityX(-160);
    }
    else if (cursor.right.isDown) {
      dude.setVelocityX(160);
    }
    moveok = true;
    zombs.forEach(function (zomb) {
      zomb.update();
    });
  }
}
