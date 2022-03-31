class Laser extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'laser');
        
	}

    fire(x, y, Yangle, Xangle) {
		this.body.reset(x, y);
		this.setActive(true);
		this.setVisible(true);
 
		this.setVelocityY(Yangle*3);
        this.setVelocityX(Xangle*3);
        

        
	}

    preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}
	}
}

export default Laser;