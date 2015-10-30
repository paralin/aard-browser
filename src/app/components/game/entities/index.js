import { Block } from './block/block.entity.js';
import { Player } from './player/player.entity.js';

export function Entities(Game) {
  var Entities = Game.Entities;
  Entities.Block = Block;
  Entities.Player = Player;
}
