

class Map extends Phaser.Scene {
  constructor () {
    super();
  }

  preload () {
    this.load.image('grass','assets/sprite/grass.png');
    this.load.image('wall','assets/sprite/wall.png');
  }

  create () {
    
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