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
var cursor = [];
var moveok;
var Xdegrees = 0;
var Ydegrees = 0;
var degrees = 0;
var angle = 0;
var timer = 0;
var Maxbullets = 100;
var Maxzombies = 10;//max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo
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
class ZombiesGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);

		// Initialize the group
		this.createMultiple({
			classType: Zombies,
			frameQuantity: Maxzombies, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'zomb'
		}) 

	}
    //will call the class bullet when triggered
    ZombiesSpwan(x, y) {
		// Get the first available sprite in the group
		const zombie = this.getFirstDead(false);
		if (zombie) {
			zombie.Spawn(x, y);

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


  //will call the class bullet when triggered
  fireBullet(x, y, Yangle, Xangle) {
    // Get the first available sprite in the group
    const bullet = this.getFirstDead(false);
    if (bullet) {
      bullet.fire(x, y, Yangle, Xangle);
    }
  }
}


class Dude extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara', { key: "dude" });
    this.startX = x;
    this.startY = y;
  }
  getX(){
    var dudeX = x;
    return(dudeX);
  }
  getY(){
    var dudeY = x;
    return(dudeY);
  }

  update(cursor, moveok, body) {
    if (moveok === false) {
      body.setVelocityX(0);
      body.setVelocityY(0);
    } else if (cursor.up.isDown) {
      body.setVelocityY(-160);
    } else if (cursor.down.isDown) {
      body.setVelocityY(160);
    } else if (cursor.left.isDown) {
      body.setVelocityX(-160);
    } else if (cursor.right.isDown) {
      body.setVelocityX(160);
    }
    moveok = true;
    /*zombs.forEach(function (zomb) {
      zomb.update();
    });*/
  }
}

class Zombies extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'zomb');
	}

    //fire bullets depending on the postion and angle (angle is calculate in the 'create' part of the scene)
    Spawn(x, y) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(30);//multiplied by 3 so the bullets are faster
    this.setVelocityX(30);//multiplied by 3 so the bullets are faster

	}

    preUpdate(time, delta) {
		super.preUpdate(time, delta);

		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}


  //will call the class bullet when triggered
  ZombiesSpwan(x, y) {
    // Get the first available sprite in the group
    const zombie = this.getFirstDead(false);
    if (zombie) {
      zombie.Spawn(x, y);

    }
  }
}



class Map extends Phaser.Scene {
  constructor() {
    super({ key: "Map" });
    this.bulletGroup;
    this.ZombiesGroup;
    this.dude;
  }
  //manage the click and trigger the shoot method
  addEvents() {
    this.input.on('pointerdown', pointer => {
      this.shootBullet();
    });
  }
  //trigger the shoot
  shootBullet() {
    this.bulletGroup.fireBullet(dude.x, dude.y, Ydegrees, Xdegrees);
  }

  updateCounter(){
    this.ZombiesGroup.ZombiesSpwan(Math.random() * 800, Math.random() * 500, Ydegrees, Xdegrees);
  }

  preload() {
    this.load.image('grass', 'src/assets/sprite/grass.png');
    this.load.image('wall', 'src/assets/sprite/wall.png');
    this.load.image('carac', 'src/assets/sprite/cara.png');
    this.load.image('zomb', 'src/assets/sprite/zomb.png');
    this.load.image('map', 'src/assets/sprite/map.png');
    this.load.image('bullet', 'src/assets/sprite/bullet.png');

  }

  create () {
    var world;
    var isoY;
    var isoX;
    this.add.tileSprite(512, 384, 1024, 768, 'map');
    //var dude = new Dude(this,100,100);
    var dude = this.physics.add.sprite(500, 500, 'carac');
    cursor = this.input.keyboard.createCursorKeys();
    //dude.setDepth(1)
    this.bulletGroup = new BulletGroup(this);//create a bullet group
    this.ZombiesGroup = new ZombiesGroup(this);//create a bullet group


    for (let i = 0; i < Maxzombies; i++) {
      this.updateCounter();

    }
    this.physics.add.collider(dude, this.ZombiesGroup, function () {

    }); 
 
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
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

        this.physics.add.collider(dude, world, function () {
          moveok = false;
        });
        this.physics.add.overlap(this.ZombiesGroup, this.bulletGroup, function (ZombiesGroup, bulletGroup) {
          bulletGroup.destroy();
          ZombiesGroup.destroy();
          
        });

        // world = this.add.sprite(r * 50, c * 50, 'grass');
        Phaser.Display.Align.In.Center(world, this.add.zone(isoX, isoY, 800, 600));
      }
    }
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


    }, this);
  }

  update() {
   /* var xdude = this.dude.getX();
    console.log(xdude);*/
    
    if (moveok === false) {
      dude.setVelocityX(0);
      dude.setVelocityY(0);
    } else if (cursor.up.isDown) {
      dude.setVelocityY(-160);
    } else if (cursor.down.isDown) {
      dude.setVelocityY(160);
    } else if (cursor.left.isDown) {
      dude.setVelocityX(-160);
    }
    else if (cursor.right.isDown) {
      dude.setVelocityX(160);
    }
    moveok = true;
    

      this.ZombiesGroup.x += (dude.x - this.ZombiesGroup.x) * 0.01;
      this.ZombiesGroup.y += (dude.y - this.ZombiesGroup.y) * 0.01;
  }
}