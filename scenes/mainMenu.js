class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }

    preload() {
        this.load.image('main', 'assets/menu/main.jpg');
        this.load.image('sButton', 'assets/menu/settingsButton.png');
        this.game.load.spritesheet('startButton', 'assets/menu/startButton.png', 193, 71);
    }

    create() {
        const bg = this.game.add.tileSprite(0, 0, 1024, 768, 'main');
        //const stb = this.game.add.button(game.world.centerX - 95, 400, 'startButton', startAction, this, 2, 1, 0);
        //const sb = this.add.image(0, 0, 'sButton');
    }

    startAction() {
        this.scene.start("Example");
    }

    update() {

    }
}