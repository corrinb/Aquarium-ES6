const MAX_X = 1024;
const MAX_Y = 768;
const MIN_X = 0;
const MIN_Y = 0;

class Fish {

  constructor(element) {
    this.element = element;
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 1;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
  }

  update() {
    const fishRight = this.x + this.width;
    const fishBottom = this.y + this.height;
    if (fishRight >= MAX_X || this.x < MIN_X ) {
      this.speedX *= -1;
    }
    if (fishBottom >= MAX_Y || this.y < MIN_Y) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  display() {
    this.element.style.left = this.x;
    this.element.style.top = this.y;
  }

}
