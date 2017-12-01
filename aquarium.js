(() => {

let fishes;

function init() {
  initFish();
  window.requestAnimationFrame(animationLoop);
}

const initFish = () => {
  const fishElements = document.querySelectorAll('.fish');
  fishes = [];
  for(let i = 0; i < fishElements.length; i++) {
    const element = fishElements[i];
    fishes.push(new Fish(element));
  }
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
