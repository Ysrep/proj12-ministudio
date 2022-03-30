const map = [
  [3, 1, 1, 1, 1, 4],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [6, 1, 1, 1, 1, 5]
];

class Map extends Phaser.Scene {
  constructor () {
    super();
  }

  preload () {
    this.load.image('grass','assets/sprite/grass.png');
    this.load.image('wall','assets/sprite/wall.png');
  }

  create () {
    var world;
    var isoY;
    var isoX;

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
  }

  update () {
        
  }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#0d0d0d',
    parent: 'phaser-map',
    scene: [ Map ]
};

const game = new Phaser.Game(config);