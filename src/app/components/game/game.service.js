/*global PIXI*/

import { Entities } from './entities/index';
import { States } from './states/index';
import { Components } from './components/index';

export class Game {
  constructor (preloader, $log) {
    'ngInject';

    this.preloader = preloader;
    this.log = $log;
    this.requiresMapUpdate = true;
  }

  initialize(pGame) {
    this.Entities = Game.Entities;
    this.Components = Game.Components;
    this.State = this.States.Init;
    this.pGame = pGame;
    this.activeComponents = [];
  }

  preload() {
    var t = this;
    var currload = "";
    this.preloader.preload((loader, resource) => {
      if (resource.url !== currload) {
        t.log.log("loading: " + resource.url);
        currload = resource.url;
      }

      t.log.log("progress: " + loader.progress + "%");
    }, () => {
      t.log.log("done loading");
      t.resources = this.preloader.resources;
      t.create();
    });
  }

  spawnComponent(Component) {
    var comp = new Component(this, this.pGame);
    comp.initialize();
    this.activeComponents.push(comp);
    return comp;
  }

  create() {
    this.stage = new PIXI.Container();
    // Initialize the current state display
    this.statusDisplay = this.spawnComponent(Game.Components.StateDisplay);
    this.map = this.spawnComponent(Game.Components.Map);
    this.player = this.spawnComponent(Game.Entities.Player);

    this.update();
  }

  update() {
    var t = this;
    requestAnimationFrame(() => {
      t.update();
    });

    this.map.update();
    this.player.update();

    this.pGame.render(this.stage);
  }

  resized() {
    this.requiresMapUpdate = true;
  }

  dispose() {
    this.activeComponents.forEach((comp) => {
      comp.dispose();
    });
  }
}

Game.prototype.States = {};
// Not on prototype, these are classes themselves.
Game.Components = {};
Game.Entities = {};

Entities(Game);
States(Game.prototype);
Components(Game.Components);
