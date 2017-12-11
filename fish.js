const MAX_X = 1024;
const MAX_Y = 768;
const MIN_X = 0;
const MIN_Y = 0;

class Fish {

  constructor(image='yellow-fish') {
    this.amplitude = getRandomNumber(15,25);
    this.depth = getRandomNumber(50,600);
    this.element = null;
    this.frequency = getRandomNumber(0.003,0.007);
    this.image = image;
    this.orientation = 1;
    this.size = 'medium';
    this.speedX = getRandomNumber(0.5,2.5);
    this.x = 0;
    this.y = 0;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('img');
    this.element.className = `actor fish ${this.size}-fish`;
    this.element.src = `img/${this.image}.png`;
    this.element.alt = this.image;
  }

  //these actions must happen after the element is appended to the DOM
  afterCreation() {
    // waitFor(10).then(this.setDimensions.bind(this));
    waitFor(10).then(() => {
      this.setDimensions();
    });
  }

  setDimensions() {
    this.width = this.element.offsetWidth;
  }

  update() {
    const fishRight = this.x + this.width;
    if (fishRight >= MAX_X || this.x < MIN_X ) {
      this.speedX *= -1;
      this.orientation *= -1;
    }

    this.x += this.speedX;
    this.y = sineWave(this.x, this.amplitude, this.frequency, this.depth);

    this.y = Math.max(MIN_Y, this.y);  // Keep fish in tank, just in case
    this.y = Math.min(MAX_Y, this.y);
  }

  display() {
    this.element.style.left = this.x;
    this.element.style.top = this.y;
    const scaleString = `scaleX(${this.orientation})`;
    this.element.style.transform = `scaleX(${this.orientation})`;
  }

}
