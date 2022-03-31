var zombs = [];
var dude;
var scene;

class Example extends Phaser.Scene {
    constructor() {
      super({key:"Example"});
    }
  
    preload() {
      this.load.image('cara', './assets/sprite/cara.png');
      this.load.image('zomb', './assets/sprite/zomb.png');
      this.load.audio('bread', [
        '../assets/SFX/bread.mp3'
      ]);
      this.load.atlas('isoblocks', './assets/sprite/mediumSus.png', 'sus.json');
    }
  
    create() {
      
      //create the map *****
      var mapWidth = 40;
      var mapHeight = 40;
  
      var tileWidthHalf = 20;
      var tileHeightHalf = 12;
  
      var centerX = (mapWidth / 2) * tileWidthHalf;
      var centerY = -100;
  
      var blocks = [];
      scene = this;
      dude = this.add.existing(new Dude(this, 100, 100));
  
      for(let i=0; i < 5; i++){
        zombs.push(this.add.existing(new Zomb(this, Math.random() * 800, Math.random() * 500, dude)));
      }
  
      dude.setDepth(1);
      
      for (var y = 0; y < mapHeight; y++)
      {
          for (var x = 0; x < mapWidth; x++)
          {
              var tx = (x - y) * tileWidthHalf;
              var ty = (x + y) * tileHeightHalf;
  
              var block = (x % 2 === 0) ? 'block-125' : 'block-132';
  
              var tile = this.add.image(centerX + tx, centerY + ty, 'isoblocks', block);
  
              tile.setData('row', x);
              tile.setData('col', y);
  
              tile.setDepth(0);
  
              blocks.push(tile);
          }
      }
      //camera option *****
      this.cameras.main.zoom = 0.62;
      this.cameras.main.scrollX = -110;
      //*****
      for (let i = 0; i < 5; i++) {
        zombs.push(this.add.existing(new Zomb(this, Math.random() * 800, Math.random() * 500, dude)));
      }
      this.sound.pauseOnBlur = false;
  
      var music = this.sound.add('bread');
      cursor = this.input.keyboard.createCursorKeys()
      music.play();
    }
  
    update() {
      
  
      dude.update();
  
      zombs.forEach(function (zomb) {
        zomb.update();
      });
  
      this.input.keyboard.on('keyup', function(e) {
        if (e.key == 2) {
          this.scene.start("Example2");
        }
      }, this );
    }
  }