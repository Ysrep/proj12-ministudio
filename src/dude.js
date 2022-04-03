class DudeGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);

    // Initialize the group
    this.createMultiple({
      classType: Dude,
      frameQuantity: 1, // Create instances in the pool
      active: false,
      visible: false,
      key: 'dude'
    })
  }

  //will call the class bullet when triggered
  DudeSpwan(x, y) {
    // Get the first available sprite in the group
    const dude = this.getFirstDead(false);
    if (dude) {
      dude.Spawn(x, y);
    }
  }
}


class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'cara');
    this.startX = x;
    this.startY = y;
    this.hp = 5;
  }

  update() {
    const UP = this.cursor.up.isDown;
    const DOWN = this.cursor.down.isDown;
    const LEFT = this.cursor.left.isDown;
    const RIGHT = this.cursor.right.isDown;

    if (UP) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityY(-160);
    }
    else if (DOWN) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityY(160);
    }
    else if (LEFT) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityX(-160);
    }
    else if (RIGHT) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setVelocityX(160);
    }
    else {
      this.setVelocityX(0);
      this.setVelocityY(0);
    }
  }

  damaged() {
    this.hp --;
  }
}
