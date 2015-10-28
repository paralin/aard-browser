export class StateDisplay {
  constructor(game, pGame) {
    this.game = game;
    this.pGame = pGame;
  }

  initialize() {
    var bmptext = this.bmptext = this.pGame.add.bitmapText(10, 100, 'carrier_command', 'Drag me around', 34);
    bmptext.inputEnabled = true;
    bmptext.input.enableDrag();
  }

  dispose() {
    if (this.bmptext)
      this.pGame.remove(this.bmptext);
  }
}
