import Phaser from 'phaser'

var exit;

class MainMenu extends Phaser.Scene
{
	preload()
    {
        this.load.image('main', 'assets/sprites/menu/main.jpg');
        this.load.image('logo', 'assets/sprites/menu/logo.png');
        this.load.audio('bread', ['assets/SFX/bread.mp3'])
    }

    create()
    {
        this.add.image(300, 270, 'main');
        this.add.image(500, 300, 'logo');
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = this.add.text(315, 600, "~Press Any Key for Start~", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        var music = this.sound.add('bread');
        this.sound.pauseOnBlur = false;
        //music.play();
    }

    update()
    {
        this.input.keyboard.on('keyup', function (e) {
            if (e.key == 0 && exit != 1) {
              exit = 1;
              this.scene.start("GameScene");
            }
          }, this);
    }
}

export default MainMenu