const MAX_X = 1024;
const MAX_Y = 768;
const MIN_X = 0;
const MIN_Y = 0;

Math.tau = 2 * Math.PI;

var sineWave = (x, amplitude, frequency, depth) => {
  return (amplitude * Math.sin(Math.tau * frequency * x)) + depth;
}

class Fish {

  constructor(image, amplitude=20, depth=384, frequency=0.005,  size='medium', speed=1, x=0) {
    this.amplitude = amplitude;
    this.depth = depth;
    this.element = null;
    this.frequency = frequency;
    this.image = image;
    this.orientation = 1;
    this.size = size;
    this.speedX = speed;
    this.x = x;
    this.y = 0;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('img');
    this.element.className = `actor fish ${this.size}-fish`;
    this.element.src = `img/${this.image}.png`;
    this.element.alt = this.image;
  }

  //these actions must happen after the element is appended to the DOMi
  afterCreation() {
    this.height = this.element.offsetHeight;
    this.width = this.element.offsetWidth;
  }

  update() {
    const fishRight = this.x + this.width;
    const fishBottom = this.y + this.height;
    if (fishRight >= MAX_X || this.x < MIN_X ) {
      this.speedX *= -1;
      this.orientation *= -1;
    }

    this.x += this.speedX;
    this.y = sineWave(this.x, this.amplitude, this.frequency, this.depth);

    this.y = Math.max(MIN_Y, this.y);
    this.y = Math.min(MAX_Y, this.y);
  }


  display() {
    this.element.style.left = this.x;
    this.element.style.top = this.y;
    const scaleString = `scaleX(${this.orientation})`;
    this.element.style.transform = `scaleX(${this.orientation})`;
  }

}
