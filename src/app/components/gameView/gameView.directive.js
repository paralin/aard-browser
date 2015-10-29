// Make ESLint happy
/*global Phaser*/
/*global $*/

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
  constructor ($timeout, $log, $window, $scope, game) {
    'ngInject';
    $scope.$on('destroy', () => {
      $(this.window).unbind("resize");
    });
    this.game = game;
    this.log = $log;
    this.window = $window;
    var t = this;
    $timeout(() => {
      t.initialize();
    });
  }

  updateSize() {
    var ele = $("#game-container");
    if (!ele) return;

    var width = this.width = ele.prop('offsetWidth');
    var height = this.height = ele.prop('offsetHeight');

    if (!this.pGame) return;
    this.pGame.stage.height = this.pGame.height = height;
    this.pGame.stage.width = this.pGame.width = width;

    if (this.pGame.renderType === Phaser.WEBGL)
    {
      this.pGame.renderer.resize(width, height);
    }
  }

  initialize() {
    var t = this;
    this.updateSize();
    $(this.window).on('resize', () => {
      t.updateSize();
    });

    var pGame = this.pGame = new Phaser.Game(this.width, this.height, Phaser.AUTO, 'game-container', { preload: preload, create: create });
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
