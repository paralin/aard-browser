/*global PIXI*/
export class Block {
  constructor(game, pGame, size, x, y) {

    this.BlockTypes = {
      AIR: 0,
      DIRT: 1,
      GRASS: 2
    }

    this.size = size;
    this.game = game;
    this.pGame = pGame;
    this.x = x;
    this.y = y;
    this.type = this.BlockTypes.AIR;
    this.generateType();
  }

  initialize() {
    var x = this.x;
    var y = this.y;

    // Just to be sure
    this.dispose();

    if (this.type == this.BlockTypes.AIR)
      return;

    var sprite = this.sprite = new PIXI.Graphics();
    sprite.beginFill(this.type == this.BlockTypes.DIRT ? 0x0000FF : 0xFFFFFF, 1);
    sprite.lineStyle(1, 0xFF0000);
    sprite.drawRect(x*this.size, y*this.size, this.size, this.size);

    this.game.stage.addChild(sprite);
  }

  generateType() {
    if (this.y < ((Math.sin(this.x/10)*5) + 40)) return;
    this.type = (Math.random() > 0.5) ? this.BlockTypes.DIRT : this.BlockTypes.GRASS;
  }

  dispose() {
    if (this.sprite) {
      this.game.stage.removeChild(this.sprite);
      this.sprite = null;
    }
  }
}
