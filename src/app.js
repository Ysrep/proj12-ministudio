const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-MapS',
  scene:[Map],
  physics: {
    default: 'arcade',
    arcade: {
        debug: true
    }
  }
}
var game = new Phaser.Game(config);

  /*physics: {
    default: 'matter',
    matter: {
      gravity : {y:0},
      debug: true
    }
  },
  scene: [MainMenu, Map, GameOver],
};

var game = new Phaser.Game(config);*/