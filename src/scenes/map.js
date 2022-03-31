const map = [
  [3, 1, 1, 1, 1, 4],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [6, 1, 1, 1, 1, 5]
];

var Xdegrees = 0;
var Ydegrees = 0;
var degrees = 0;
var Maxbullets = 1000;//max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo
//create a group for the bullets
class BulletGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);

		// Initialize the group
		this.createMultiple({
			classType: Bullet,
			frameQuantity: Maxbullets, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'bullet'
		}) 

	}
    //will call the class bullet when triggered
    fireBullet(x, y, Yangle, Xangle) {
		// Get the first available sprite in the group
		const bullet = this.getFirstDead(false);
		if (bullet) {
			bullet.fire(x, y, Yangle, Xangle);

		}
	}

}
//bullet properties
class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'bullet');

	}
    //fire bullets depending on the postion and angle (angle is calculate in the 'create' part of the scene)
    fire(x, y, Yangle, Xangle) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(Yangle*3);//multiplied by 3 so the bullets are faster
    this.setVelocityX(Xangle*3);//multiplied by 3 so the bullets are faster
	}

    preUpdate(time, delta) {
		super.preUpdate(time, delta);

		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}
}



var angle = 0;


class Map extends Phaser.Scene {
  constructor () {
    super({ key: "Map" });
    this.bulletGroup;
  }

//manage the click and trigger the shoot method
  addEvents() {
    this.input.on('pointerdown', pointer => {
        this.shootBullet();
    });
  }
  //trigger the shoot
  shootBullet() {
      this.bulletGroup.fireBullet(dude.x, dude.y - 20, Ydegrees, Xdegrees);
  }

  preload () {
    this.load.image('grass','src/assets/sprite/grass.png');
    this.load.image('wall','src/assets/sprite/wall.png');
    this.load.image('cara', 'src/assets/sprite/cara.png');
    this.load.image('bullet', 'src/assets/sprite/bullet.png');
  }

  create () {
    var world;
    var isoY;
    var isoX;
    cursor = this.input.keyboard.createCursorKeys();
    
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            world = this.add.sprite(500, 500, 'grass');
            break;
          case 1:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 2:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 3:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 4:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 5:
            world = this.add.sprite(500, 500, 'wall');
            break;
          case 6:
            world = this.add.sprite(500, 500, 'wall');
            break;
          default:
            break;
        }
        isoX = (800 + r * 20) - (300 + c *27 );
        isoY = ((400 + r * 31) + (300 + c * 31)) / 2;
                
        // world = this.add.sprite(r * 50, c * 50, 'grass');
        Phaser.Display.Align.In.Center(world, this.add.zone(isoX, isoY, 800, 600));
      }
    }

    
    dude = this.add.existing(new Dude(this, 100, 100));//add the character

    this.bulletGroup = new BulletGroup(this);//create a bullet group
		this.addEvents();//call the method to trigger the shoot
    //aiming
    this.input.on('pointermove', function (pointer) {
        angle = Phaser.Math.Angle.BetweenPoints(dude, pointer);//give an angle between the character and the pointer
        degrees = Phaser.Math.RadToDeg(angle);//change the angle in radians into degrees ( easier to work with )
        //calculate the angle of th X and Y axis. angle will be used for the shooting method so the bullet goes in the right direction
        if(degrees>0){
            Xdegrees = (-degrees)+90;
        }
        if(degrees<=0){
            Xdegrees= (degrees+90);
        }
        if(0<degrees && degrees<=90){
            Ydegrees = degrees;
        }
        if(90<degrees && degrees<=180){
            Ydegrees = -(degrees)+180;
        }
        if(0>degrees && degrees>-90){
            Ydegrees = degrees;
        }
        if(-90>degrees && degrees>=-180){
            Ydegrees = -(degrees+180);
        }

        dude.rotation = angle;//rotate the charcter and make him aim the pointer. need to be removed and replaced by an animation

    }, this);
  }

  update () {
    dude.update(cursor);
    dude.update(cursor);//update the dude controls
  }
} 