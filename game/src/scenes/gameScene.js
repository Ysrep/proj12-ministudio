import Phaser, { Game } from 'phaser'
import Dude from "../javascripts/dude"

const map = [
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5]
  ];

var player = [];

class GameScene extends Phaser.Scene
{

	preload()
    {
        this.load.image('grass', 'assets/sprites/grass.png')
        this.load.image('wall', 'assets/sprites/wall.png')
        this.load.image('carac', 'assets/sprites/cara.png')
        this.load.image('zomb', 'assets/sprites/zomb.png')
        this.load.image('map', 'assets/sprites/map.png')
        this.load.image('bullet', 'assets/sprites/bullet.png')
    }

    create()
    {
        var world;
        var isoY;
        var isoX;
        this.add.tileSprite(512, 384, 1024, 768, 'map');
    
        for (let r = 0; r < map.length; r++) {
            for (let c = 0; c < map[0].length; c++)
            {
                switch (map[r][c]) {
                case 0:
                    world = this.add.sprite(500, 500, 'grass');
                    break;
                case 1:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                case 2:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                case 3:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                case 4:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                case 5:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                case 6:
                    world = this.physics.add.sprite(500, 500, 'wall');
                    world.body.pushable = false
                    break;
                default:
                    break;
                }

                isoX = (800 + r * 20) - (300 + c * 20);
                isoY = ((400 + r * 23) + (300 + c * 23)) / 2;

                // world = this.add.sprite(r * 50, c * 50, 'grass');
                Phaser.Display.Align.In.Center(world, this.add.zone(isoX, isoY, 800, 600));
            }
        }
    }

    update()
    {

    }
}

export default GameScene
