import Phaser from 'phaser'
import GameScene from './scenes/gameScene'
import MainMenu from './scenes/mainMenu'
import GameOver from './scenes/gameOver'

const config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false
		}
	},
}

const game = new Phaser.Game(config)

game.scene.add('mainmenu', MainMenu)
game.scene.add('gamescene', GameScene)
game.scene.add('gameover', GameOver)

//starting game scene
game.scene.start('gamescene')