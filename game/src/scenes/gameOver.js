import Phaser from 'phaser'

class GameOver extends Phaser.Scene
{
	preload()
    {
        this.load.image('GO', 'assets/sprites/gameover.png');
    }

    create()
    {
        this.add.image(512, 384, 'GO').setScale(0.15); 
    }
}

export default GameOver