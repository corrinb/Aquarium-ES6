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
  fishes.push(new Fish('yellow-fish', 16, 300, 0.007, 'medium', 2, 0));
  fishes.push(new Fish('yellow-fish', 24, 200, 0.003));
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
