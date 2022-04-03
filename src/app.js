const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  backgroundColor: '#0d0d0d',
  parent: 'phase-MapS',
  scene:[MainMenu, Map, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
        debug: true
    }
  }
}
var game = new Phaser.Game(config);