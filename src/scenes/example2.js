class Example2 extends Phaser.Scene {
    constructor() {
      super({key:"Example2"});
    }

    preload() {

    }
  
    create() {
      this.text = this.add.text(0,0,"Welcome", { font:"40px Impact"});
    }

    update() {
        
    }
  }