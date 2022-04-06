class ZombiesGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);
    this.dude = dude;

    // Initialize the group
    this.createMultiple({
      classType: Zombies,
      frameQuantity: Maxzombies, // Create instances in the pool
      active: false,
      visible: false,
      key: 'zomb'
    })
  }

  //will call the class bullet when triggered
  ZombiesSpawn(x, y) {
    // Get the first available sprite in the group
    const zombie = this.getFirstDead(false);
    this.x = x;
    this.y = y;
    if (zombie) {
      zombie.Spawn(x, y);
    }
  }

  update(x, y) {
    var dirx = this.x - x;
    var diry = (this.y*this.y) - (y*y);
    const speedWalk = 150;

    let zombVelocity = new Phaser.Math.Vector2();

    if (dirx > 0) {
      zombVelocity.x = -1;
      enemy.anims.play('right');
    } else if (dirx < 0) {
      zombVelocity.x = 1;
      enemy.anims.play('left');
    } else if (dirx == 0) {
      zombVelocity.x = 0;
    }

    if (diry > 0) {
      zombVelocity.y = -1;
    } else if (diry < 0) {
      zombVelocity.y = 1;
    } else if (diry == 0) {
      zombVelocity.y = 0;
    }


    enemy.anims.create({
      key: 'idle',
      frames: [{ key: 'zombi', frame: 6 }],
      frameRate: 20
    })

    enemy.anims.create({
      key: 'left',
      frames: enemy.anims.generateFrameNumbers('zombi', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    })

    enemy.anims.create({
      key: 'right',
      frames: enemy.anims.generateFrameNumbers("zombi", { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    zombVelocity.scale(speedWalk);
    this.setVelocity(zombVelocity.x, zombVelocity.y);

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
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}