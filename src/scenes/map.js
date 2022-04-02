const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var cursor;
var dude = null;
var healthpoints = null;
var reticle = null;
var playerBullets = null;
var time = 0;
var timer = 0;
var Maxbullets = 100;
var Maxzombies = 10;//max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo

//set Score variables
var score = 0;
var scoreText;

var text;
var timerEvents = [];
var scoreMultiplicator = 1;

var Bullet = new Phaser.Class({

  Extends: Phaser.GameObjects.Image,

  initialize:

  // Bullet Constructor
  function Bullet (scene)
  {
      Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
      this.speed = 1;
      this.born = 0;
      this.direction = 0;
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.setSize(12, 12, true);
  },

  // Fires a bullet from the player to the reticle
  fire: function (shooter, target)
  {
      this.setPosition(shooter.x, shooter.y); // Initial position
      this.direction = Math.atan( (target.x-this.x) / (target.y-this.y));

      // Calculate X and y velocity of bullet to moves it from shooter to target
      if (target.y >= this.y)
      {
          this.xSpeed = (this.speed*Math.sin(this.direction))/2;
          this.ySpeed = (this.speed*Math.cos(this.direction))/2;
      }
      else
      {
          this.xSpeed = (-this.speed*Math.sin(this.direction))/2;
          this.ySpeed = (-this.speed*Math.cos(this.direction))/2;
      }

      this.rotation = Phaser.Math.Angle.Between(shooter.x, shooter.y, target.x, target.y); // angle bullet with shooters rotation
      this.born = 0; // Time since new bullet spawned
  },

  // Updates the position of the bullet each cycle
  update: function (time, delta)
  {
      this.x += this.xSpeed * delta;
      this.y += this.ySpeed * delta;
      this.born += delta;
      if (this.born > 1800)
      {
          this.setActive(false);
          this.setVisible(false);
      }
  }

});




class ZombiesGroup extends Phaser.Physics.Arcade.Group {
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

class Zombies extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'zomb');
	}

    Spawn(x, y) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(30);
    this.setVelocityX(30);
	}

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }

  
  ZombiesSpwan(x, y) {
    const zombie = this.getFirstDead(false);
    if (zombie) {
      zombie.Spawn(x, y);
    }
  }
}

/*class DudeGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      classType: Dude,
      frameQuantity: 1,
      active: true,
      visible: true,
      key: 'dude'
    })
  }


}*/

class Map extends Phaser.Scene {
  constructor() {
    super({ key: "Map" });
    this.playerBullets
    this.ZombiesGroup;
    this.dude;
  }
  

  updateCounter(){
    this.ZombiesGroup.ZombiesSpwan(Math.random() * 800, Math.random() * 500);
  }

  preload() {
    this.load.image('grass', 'src/assets/sprite/grass.png');
    this.load.image('gravel', 'src/assets/sprite/gravier.png');
    this.load.image('wall', 'src/assets/sprite/wall.png');
    this.load.image('carac', 'src/assets/sprite/cara.png');
    this.load.image('zomb', 'src/assets/sprite/zomb.png');
    this.load.image('bullet', 'src/assets/sprite/uwu.png');
    this.load.image('arche', 'src/assets/sprite/archeeliza.png');
    this.load.image('target', 'src/assets/sprite/crossAim.png');
  }

  create () {
    playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
    dude = this.physics.add.sprite(500, 500, 'carac');
    reticle = this.physics.add.sprite(700, 500, 'target');

    dude.health = 3;
    

    this.input.on('pointerdown', function (pointer, time, lastFired) {
      if (dude.active === false)
          return;

      // Get bullet from bullets group
      var bullet = playerBullets.get().setActive(true).setVisible(true);

      if (bullet)
      {
          bullet.fire(dude, reticle);
          this.physics.add.collider(this.ZombiesGroup, bullet, function(){});
      }
    }, this);

    this.cameras.main.setBounds(0, 0, 1024, 768);
    var ground;
    var world;
    var isoY;
    var isoX;

    cursor = this.input.keyboard.createCursorKeys();
    dude.setDepth(1);
    reticle.setDepth(1);
    this.ZombiesGroup = new ZombiesGroup(this);//create a bullet group

    //Camera settings
    this.cameras.main.startFollow(dude, true, 0.09, 0.09);
    this.cameras.main.setZoom(1.5);

    /*Print Score & Timer */
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    scoreText = this.add.text(16, 16, 'score: 0', style);

    text = this.add.text(32, 32);
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(10000, 10000), loop: true }));

    
    for (let i = 0; i < Maxzombies; i++) {
      this.updateCounter();
    }
    
    this.physics.add.collider(dude, this.ZombiesGroup, function () {

    }); 
    //display map
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[0].length; c++) {
        switch (map[r][c]) {
          case 0:
            ground = this.add.sprite(500, 500, 'gravel');
            break;
          case 1:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(500, 500, 'arche');
            world.body.pushable = false;
            break;
          case 2:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(500, 500, 'arche');
            world.body.pushable = false;
            break;
          case 3:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(500, 500, 'arche');
            world.body.pushable = false;
            break;
          case 4:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(123, 50, 'arche');
            world.body.pushable = false;
            break;
          case 5:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(500, 500, 'arche');
            world.body.pushable = false;
            break;
          case 6:
            ground = this.add.sprite(500, 500, 'gravel');
            world = this.physics.add.sprite(500, 500, 'arche');
            world.body.pushable = false;
            break;
          default:
            break;
        }

        isoX = (0 + r * 20) - (0 + c * 20);
        isoY = ((0 + r * 23) + (0 + c * 23)) / 2;
        //add collider for world's wall
        this.physics.add.collider(dude, world, function () {
          moveok = false;
        });

        this.physics.add.overlap(this.ZombiesGroup, playerBullets, function (ZombiesGroup, playerBullets) {
          playerBullets.destroy();
          ZombiesGroup.destroy();
          //update score
          score += 10 * scoreMultiplicator;
          scoreText.setText('Score: ' + score);
        });
        
        Phaser.Display.Align.In.Center(ground, this.add.zone(isoX, isoY, 800, 600));
      }
    }      
        
    // Pointer lock will only work after mousedown
    game.canvas.addEventListener('mousedown', function () {
      game.input.mouse.requestPointerLock();
  });

  // Exit pointer lock when Q or escape (by default) is pressed.
  this.input.keyboard.on('keydown_Q', function (event) {
      if (game.input.mouse.locked)
          game.input.mouse.releasePointerLock();
  }, 0, this);

    this.input.on('pointermove', function (pointer) {
      if (this.input.mouse.locked)
      {
          reticle.x += pointer.movementX;
          reticle.y += pointer.movementY;
      }
  }, this);


  }
  update()
  {
    
    // Constrain position of constrainReticle
    constrainReticle(reticle);
    

    if (cursor.up.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(-160)
    }
    else if (cursor.down.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityY(160)
    }
    else if (cursor.left.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(-160)
    }
    else if (cursor.right.isDown)
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
      dude.setVelocityX(160)
    }
    else 
    {
      dude.setVelocityX(0)
      dude.setVelocityY(0)
    }

   
    this.ZombiesGroup.x += (dude.x - this.ZombiesGroup.x) * 0.01;
    this.ZombiesGroup.y += (dude.y - this.ZombiesGroup.y) * 0.01;

    //timer reinitialize
    var output = [];
    output.push('Event.progress: ' + timerEvents[0].getProgress().toString().substr(0, 4));
    if (timerEvents[0].getProgress().toString().substr(0, 4) == 0.9) {
      console.log("+15 multiplicator");
      scoreMultiplicator += 1;
    }
    text.setText(output);

    
  }
}

/*
function enemyHitCallback(enemyHit, bulletHit)
{
    // Reduce health of enemy
    if (bulletHit.active === true && enemyHit.active === true)
    {
        enemyHit.health = enemyHit.health - 1;
        console.log("Enemy hp: ", enemyHit.health);

        // Kill enemy if health <= 0
        if (enemyHit.health <= 0)
        {
           enemyHit.destroy();
        }

        // Destroy bullet
        bulletHit.destroy();
    }
}*/
/*
function playerHitCallback(playerHit, bulletHit)
{
    // Reduce health of player
    if (bulletHit.active === true && playerHit.active === true)
    {
        playerHit.health = playerHit.health - 1;
        console.log("Player hp: ", playerHit.health);

        // Kill hp sprites and kill player if health <= 0
        if (playerHit.health == 2)
        {
            hp3.destroy();
        }
        else if (playerHit.health == 1)
        {
            hp2.destroy();
        }
        else
        {
            hp1.destroy();
            // Game over state should execute here
        }

        // Destroy bullet
        bulletHit.setActive(false).setVisible(false);
    }
}*/

function constrainReticle(reticle)
{
    var distX = reticle.x-dude.x; // X distance between player & reticle
    var distY = reticle.y-dude.y; // Y distance between player & reticle

    // Ensures reticle cannot be moved offscreen (player follow)
    if (distX > 330)
        reticle.x = dude.x+330;
    else if (distX < -330)
        reticle.x = dude.x-330;

    if (distY > 240)
        reticle.y = dude.y+240;
    else if (distY < -240)
        reticle.y = dude.y-240;
}