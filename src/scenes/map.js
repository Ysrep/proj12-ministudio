const map = [
  [3, 1, 1, 1, 1, 4],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [6, 1, 1, 1, 1, 5]
];

class Map1 extends Phaser.Scene {
  constructor () {
    super({ key: "Map1" });
  }

  preload () {
    this.load.image('grass','src/assets/sprite/grass.png');
    this.load.image('wall','src/assets/sprite/wall.png');
    this.load.image('cara', 'src/assets/sprite/cara.png');
  }

  create () {
    var world;
    var isoY;
    var isoX;
    cursor = this.input.keyboard.createCursorKeys();
    

    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            world = this.add.sprite(500, 500, 'grass');
            break;
          case 1:
            world = this.add.sprite(500, 500, 'wall');
            break;

          case 2:
            world = this.add.sprite(500, 500, 'wall');
            break;

          case 3:
            world = this.add.sprite(500, 500, 'wall');
            break;

          case 4:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 5:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 6:
            world = this.add.sprite(500, 500, 'wall');
            break;
          default:
            break;
        }
        isoX = (800 + r * 20) - (300 + c *27 );
        isoY = ((400 + r * 31) + (300 + c * 31)) / 2;
                
        // world = this.add.sprite(r * 50, c * 50, 'grass');
        Phaser.Display.Align.In.Center(world, this.add.zone(isoX, isoY, 800, 600));
      }
    }

    dude = this.add.existing(new Dude(this, 100, 100));
  }

  update () {
    dude.update(cursor);
  }
}