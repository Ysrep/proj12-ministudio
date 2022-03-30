class weapons extends Phaser.GameObjects.Image {
    constructor(type, use, damage){
        super(type, use, damage, 'weapon');

        this.startType = type;
        this.startUse = use;
    }
}