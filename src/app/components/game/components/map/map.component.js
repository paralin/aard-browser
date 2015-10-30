// 10x10 pixelsj
var BLOCK_SIZE = 10;
export class Map {
  constructor(game, pGame) {
    this.game = game;
    this.pGame = pGame;
    this.blocks = [[]];
    this.hasGenerated = false;
  }

  initialize() {
  }

  update() {
    // First, check the size of our view.
    var width = this.pGame.width;
    var height = this.pGame.height;
    var numwidth = Math.floor((width) / BLOCK_SIZE);
    var numheight = Math.floor((height) / BLOCK_SIZE);
    var i;
    var x;
    var row;

    var oldlen = this.blocks.length;
    if (oldlen != numheight) {
      if (oldlen > numheight) {
        for (i = numheight-1; i < this.blocks.length; i++) {
          row = this.blocks[i];
          for (x = 0; x < row.length; x++) {
            if (row[x])
              row[x].dispose();
          }
        }
      }
      else if (oldlen < numheight) {
        for (i = oldlen-1; i < numheight; i++) {
          this.blocks[i] = [];
          for ( x = 0; x < numwidth; x++ ) {
            this.blocks[i].push(this.generateBlock(x, i));
          }
        }
      }
      this.blocks.length = numheight;
    }

    if (this.blocks[0].length != numwidth) {
      for (i = 0; i < this.blocks.length; i++) {
        oldlen = this.blocks[i].length;
        if (oldlen > numwidth) {
          for (x = numwidth-1; x < oldlen; x++) {
            if (this.blocks[i][x])
              this.blocks[i][x].dispose();
          }
        }
        this.blocks[i].length = numwidth;
        if (oldlen < numwidth) {
          for (x = oldlen-1; x < numwidth; x++) {
            this.blocks[i][x] = this.generateBlock(x, i);
          }
        }
      }
    }
  }

  generateBlock(x, y) {
    var block = this.blocks[y][x] = new this.game.Entities.Block(this.game, this.pGame, BLOCK_SIZE, x, y);
    block.initialize();
  }

  dispose() {
  }
}
