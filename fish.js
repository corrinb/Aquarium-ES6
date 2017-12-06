const MAX_X = 1024;
const MAX_Y = 768;
const MIN_X = 0;
const MIN_Y = 0;

Math.tau = 2 * Math.PI;

sineWave = (x, amplitude, frequency, depth) => {
  return (amplitude * Math.sin(Math.tau * frequency * x)) + depth;
}

class Fish {

  constructor(element) {
    this.element = element;
    this.x = 0;
    this.depth = 500;
    this.y = 0;
    this.amplitude = 20;
    this.frequency = 0.005;
    this.speedX = 1;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.orientation = 1;
  }

  update() {
    const fishRight = this.x + this.width;
    const fishBottom = this.y + this.height;
    if (fishRight >= MAX_X || this.x < MIN_X ) {
      this.speedX *= -1;
      this.orientation *= -1;
    }

    this.x += this.speedX;
    this.y = sinWave(this.x, this.amplitude, this.frequency, this.depth);

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
