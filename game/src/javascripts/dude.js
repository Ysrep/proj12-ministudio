import Phaser from "phaser";
import HealthBar from "./healthBar";

class Dude extends Phaser.GameObjects.Sprite {

    constructor (scene, color, x, y)
    {
        super(scene, x, y, "none");

        this.color = color;

        this.setTexture('dude');
        this.setPosition(x, y);

        scene.add.existing(this);

        this.alive = true;

        this.hp = new HealthBar(scene, x - 50, y - 110);

    }

}

export default Dude