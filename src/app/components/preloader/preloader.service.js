/*global PIXI*/

import { images } from './images/all.images.js';

export class Preloader {
  constructor ($log) {
    'ngInject';

    this.$log = $log;
    this.reset();
  }

  reset() {
    this.loadedPercent = 0;
  }

  preload(progcb, donecb) {
    var t = this;
    if (t.resources)
      return donecb(t.resources);

    var imagename;
    for (imagename in images) {
      PIXI.loader.add(imagename, images[imagename]);
    }
    PIXI.loader.on('progress', progcb);
    PIXI.loader.load((loader, resources) => {
      t.resources = resources;
      donecb(t.resources);
    });
  }
}
