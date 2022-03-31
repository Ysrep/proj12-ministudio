const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-example',

  scene: [ Map, MainMenu, Example2 ],
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
  scene: [MainMenu, Map]
};

var game = new Phaser.Game(config);*/