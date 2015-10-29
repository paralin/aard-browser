export class StateDisplay {
  constructor(game, pGame) {
    this.game = game;
    this.pGame = pGame;
  }

  initialize() {
    this.bmptext = this.pGame.add.bitmapText(10, 100, 'gem', 'Drag me around', 10);
    this.update();
  }

  update() {
    this.bmptext.text = this.game.State.Name;
  }

  dispose() {
    if (this.bmptext)
      this.pGame.remove(this.bmptext);
  }
}
