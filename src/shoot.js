var Xdegrees = 0;
var Ydegrees = 0;
var degrees = 0;
var angle = 0;

class Main extends Phaser.Scene {
    constructor () {
        super();
        this.laserGroup;
        }

    preload() {
        this.load.image('character', 'img/mediumSus.png');
        this.load.image('laser', 'img/sus.png');
    }

   
    
    create() {
        
        this.laserGroup = new LaserGroup(this);
		this.character = this.add.image(250, 350, 'character');
		this.addEvents();

        
        //var line = new Phaser.Geom.Line();
        this.input.on('pointermove', function (pointer) {
            angle = Phaser.Math.Angle.BetweenPoints(this.character, pointer);
            degrees = Phaser.Math.RadToDeg(angle);
            
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
                     
            this.character.rotation = angle;
            //Phaser.Geom.Line.SetToAngle(line, this.character.x, this.character.y - 50, angle, 128);
             
        }, this);  
    }
    addEvents() {
        this.input.on('pointerdown', pointer => {
            this.shootLaser();
            
        });
    }

    shootLaser() {
        this.laserGroup.fireLaser(this.character.x, this.character.y - 20, Ydegrees, Xdegrees);
    }
}
