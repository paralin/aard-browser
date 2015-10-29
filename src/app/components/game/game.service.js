import { Entities } from './entities/index';
import { States } from './states/index';
import { Components } from './components/index';

export class Game {
  constructor (preloader) {
    'ngInject';
    this.preloader = preloader;
  }

  initialize(pGame) {
    this.State = this.States.Init;
    this.pGame = pGame;
    this.activeComponents = [];
    this.preloader.reset();
  }

  preload() {
    this.preloader.preload(this.pGame);
  }

  spawnComponent(Component) {
    var comp = new Component(this, this.pGame);
    comp.initialize();
    this.activeComponents.push(comp);
    return comp;
  }

  create() {
    // Initialize the current state display
    this.statusDisplay = this.spawnComponent(Game.Components.StateDisplay);
  }

  dispose() {
    this.activeComponents.forEach((comp) => {
      comp.dispose();
    });
  }
}

Game.prototype.Entities = {};
Game.prototype.States = {};
// Not on prototype, these are classes themselves.
Game.Components = {};

Entities(Game.prototype);
States(Game.prototype);
Components(Game.Components);
