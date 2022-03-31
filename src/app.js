const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  parent: 'phase-MapS',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: true,
          checkCollision: true
      }
  },
  scene: [MainMenu, Map, GameOver]
};

var game = new Phaser.Game(config);