

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#0d0d0d',
  scene: [ Map1, MainMenu, Example, Example2 ],
  parent: 'phase-MapS',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
      checkCollision: true
    }
  },
};

var game = new Phaser.Game(config);