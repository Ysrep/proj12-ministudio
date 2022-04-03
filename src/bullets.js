var Bullet = new Phaser.Class({
  Extends: Phaser.GameObjects.Image,
  initialize:
    // Bullet Constructor
    function Bullet (scene) {
      Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
      this.speed = 1;
      this.born = 0;
      this.direction = 0;
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.setSize(12, 12, true);
    },
  
    // Fires a bullet from the player to the reticle
    fire: function (shooter, target) {
      this.setPosition(shooter.x, shooter.y); // Initial position
      this.direction = Math.atan( (target.x-this.x) / (target.y-this.y));
  
      // Calculate X and y velocity of bullet to moves it from shooter to target
      if (target.y >= this.y) {
        this.xSpeed = (this.speed*Math.sin(this.direction))/2;
        this.ySpeed = (this.speed*Math.cos(this.direction))/2;
      }else {
        this.xSpeed = (-this.speed*Math.sin(this.direction))/2;
        this.ySpeed = (-this.speed*Math.cos(this.direction))/2;
      }
      this.rotation = Phaser.Math.Angle.Between(shooter.x, shooter.y, target.x, target.y); // angle bullet with shooters rotation
      this.born = 0; // Time since new bullet spawned
    },
  
    // Updates the position of the bullet each cycle
    update: function (time, delta) {
      this.x += this.xSpeed * delta;
      this.y += this.ySpeed * delta;
      this.born += delta;
      if (this.born > 1800) {
        this.setActive(false);
        this.setVisible(false);
      }
    }
});


  
function constrainReticle(reticle) {
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