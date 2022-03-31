

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-example',

  scene: [ MainMenu, Example, Map1, Example2 ]

  /*physics: {
    default: 'matter',
    matter: {
      gravity : {y:0},
      debug: true
    }
  },*/

};

var game = new Phaser.Game(config);