// Make ESLint happy
/*global PIXI*/
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
    this.pGame.resize(width, height);
  }

  initialize() {
    var t = this;
    this.updateSize();
    $(this.window).on('resize', () => {
      t.updateSize();
      t.game.resized();
    });

    var pGame = this.pGame = new PIXI.autoDetectRenderer(this.width, this.height);
    $("#game-container")[0].appendChild(pGame.view);
    pGame.view.style.width = "100%";
    pGame.view.style.height = "100%";
    this.window.pGame = pGame;

    var game = this.game;
    game.initialize(pGame);
    game.preload();
  }
}
