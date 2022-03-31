

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-example',

  scene: [ Map1, MainMenu, Example2 ],
  physics: {
    default: 'arcade',
    arcade: {
        debug: true
    }
  }

  /*physics: {
    default: 'matter',
    matter: {
      gravity : {y:0},
      debug: true
    }
  },*/

};

var game = new Phaser.Game(config);