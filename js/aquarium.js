(() => {

let stage;
let fishes;

function init() {
  stage = document.querySelector('#stage');
  initFish();
  window.requestAnimationFrame(animationLoop);
}

const initFish = () => {
  let fishImages = ['blue-fish', 'chaetodon-fish', 'orange-fish', 'yellow-fish', 'yellow-tang-fish'];
  fishes = fishImages.map(fishImage => {
    let newFish = new Fish(fishImage);
    stage.appendChild(newFish.element);
    newFish.afterCreation();
    return newFish;
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
