(() => {

let stage;
let fishes;

function init() {
  stage = document.querySelector('#stage');
  initFish();
  window.requestAnimationFrame(animationLoop);
}

const initFish = () => {
  fishes = [];
  fishes.push(new Fish('blue-fish'));
  fishes.push(new Fish('chaetodon-fish'));
  fishes.push(new Fish('orange-fish'));
  fishes.push(new Fish('yellow-fish'));
  fishes.push(new Fish('yellow-tang-fish'));
  fishes.forEach(fish => {
    stage.appendChild(fish.element);
    fish.afterCreation();
  });
}

const animationLoop = () => {
  for (let i = 0; i < fishes.length; i++) {
    fishes[i].update();
    fishes[i].display();
  }
  window.requestAnimationFrame(animationLoop);
}

window.addEventListener('load', init);

})();
