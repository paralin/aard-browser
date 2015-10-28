export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'app/game/game.html',
      controller: 'GameController',
      controllerAs: 'game'
    });

  $urlRouterProvider.otherwise('/');
}
