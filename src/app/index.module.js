/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GameController } from './game/game.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { Preloader } from '../app/components/preloader/preloader.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { Game } from '../app/components/game/game.service';
import { GameViewDirective } from '../app/components/gameView/gameView.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('aard', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('game', Game)
  .service('githubContributor', GithubContributorService)
  .service('preloader', Preloader)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('GameController', GameController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('gameView', GameViewDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
