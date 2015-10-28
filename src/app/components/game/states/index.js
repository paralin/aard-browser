import { InitState } from './init/init.state.js';

export function States(Game) {
  var States = Game.States;
  // Register the initial game state
  InitState(States);
}
