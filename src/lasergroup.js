var Maxbullets = 2000;
class LaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
        
		// Initialize the group
		this.createMultiple({
			classType: Laser, // This is the class we create just below
			frameQuantity: Maxbullets, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'laser'
		}) 
        
	}

    fireLaser(x, y, Yangle, Xangle) {
		// Get the first available sprite in the group
		const laser = this.getFirstDead(false);
		if (laser) {
			laser.fire(x, y, Yangle, Xangle);
            
		}
	}
 
}