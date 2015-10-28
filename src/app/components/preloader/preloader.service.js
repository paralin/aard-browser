import { bitmapFonts } from './fonts/bitmap.fonts.js';

export class Preloader {
  constructor ($log) {
    'ngInject';

    this.$log = $log;
    this.reset();
  }

  reset() {
    this.loadedPercent = 0;
  }

  preload(pGame) {
    bitmapFonts.forEach((args) => {
      pGame.load.bitmapFont.apply(pGame.load, args);
    });
  }
}
