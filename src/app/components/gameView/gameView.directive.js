// Make ESLint happy
/*global Phaser*/

export function GameViewDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/gameView/gameView.html',
    scope: {
    },
    controller: GameViewController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class GameViewController {
  constructor ($timeout, game) {
    'ngInject';
    this.game = game;
    var t = this;
    $timeout(() => {
      t.initialize();
    });
  }

  initialize() {
    var pGame = this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', { preload: preload, create: create });
    var game = this.game;

    function preload() {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignVertically = true;
      game.initialize(pGame);
      game.preload();
    }

    function create() {
      game.create();
    }
  }

  preload() {
  }
}
