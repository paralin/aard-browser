export class StateDisplay {
  constructor(game, pGame) {
    this.game = game;
    this.pGame = pGame;
  }

  initialize() {
    //this.bmptext = this.pGame.add.bitmapText(10, 10, 'gem', 'Drag me around', 20);
    this.update();
  }

  update() {
    //this.bmptext.text = "State: "+this.game.State.Name;
  }

  dispose() {
    if (this.bmptext)
      this.bmptext.destroy();
      //this.pGame.remove(this.bmptext);
  }
}
