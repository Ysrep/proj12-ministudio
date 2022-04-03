class ZombiesGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);

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
		// this.setVelocityY(30);
    // this.setVelocityX(30);
	}

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}