class Map extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('isoblocks', 'img/mediumSus.png', 'img/sus.json');
    }

    create ()
    {

        var mapWidth = 40;
        var mapHeight = 40;

        var tileWidthHalf = 20;
        var tileHeightHalf = 12;

        var centerX = (mapWidth / 2) * tileWidthHalf;
        var centerY = -100;

        var blocks = [];

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

                tile.setDepth(centerY + ty);

                blocks.push(tile);
            }
        }

        this.cameras.main.zoom = 0.62;
        this.cameras.main.scrollX = -110;
    }

    update (time, delta)
    {
        
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#0d0d0d',
    parent: 'phaser-map',
    scene: [ Map ]
};

const game = new Phaser.Game(config);