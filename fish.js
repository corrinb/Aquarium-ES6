class Fish {

  constructor(element) {
    this.element = element;
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  display() {
    console.log('display');
    this.element.style.left = this.x;
    this.element.style.top = this.y;
  }

}
