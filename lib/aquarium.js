'use strict';

(function () {

  var stage = void 0;
  var fishes = void 0;

  function init() {
    stage = document.querySelector('#stage');
    initFish();
    window.requestAnimationFrame(animationLoop);
  }

  var initFish = function initFish() {
    var fishImages = ['blue-fish', 'chaetodon-fish', 'orange-fish', 'yellow-fish', 'yellow-tang-fish'];
    fishes = fishImages.map(function (fishImage) {
      var newFish = new Fish(fishImage);
      stage.appendChild(newFish.element);
      newFish.afterCreation();
      return newFish;
    });
  };

  var animationLoop = function animationLoop() {
    for (var i = 0; i < fishes.length; i++) {
      fishes[i].update();
      fishes[i].display();
    }
    window.requestAnimationFrame(animationLoop);
  };

  window.addEventListener('load', init);
})();