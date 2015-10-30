import { StateDisplay } from './stateDisplay/stateDisplay.component.js';
import { Map } from './map/map.component.js';

export function Components(Components) {
  // A nice component to show the current game state
  Components.StateDisplay = StateDisplay;
  // The map background
  Components.Map = Map;
}
