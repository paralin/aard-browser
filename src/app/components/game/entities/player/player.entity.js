/*global PIXI*/
export class Player {
  constructor(game, pGame) {
    this.game = game;
    this.pGame = pGame;
  }

  initialize() {
    var player = this.sprite = new PIXI.Sprite(this.game.resources.player.texture)
    player.position.x = 400;
    player.position.y = 300;
    player.scale.x = 2;
    player.scale.y = 2;

    this.game.stage.addChild(player);
  }

  update() {
    this.sprite.position.x += 2;
    this.sprite.position.y += 2;
  }

  dispose() {
    if (this.sprite) {
      this.game.stage.removeChild(this.sprite);
      this.sprite = null;
    }
  }
}
