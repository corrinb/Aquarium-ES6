'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MAX_X = 1024;
var MAX_Y = 768;
var MIN_X = 0;
var MIN_Y = 0;

var Fish = function () {
  function Fish() {
    var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yellow-fish';

    _classCallCheck(this, Fish);

    this.amplitude = getRandomNumber(15, 25);
    this.depth = getRandomNumber(50, 600);
    this.element = null;
    this.frequency = getRandomNumber(0.003, 0.007);
    this.image = image;
    this.orientation = 1;
    this.size = 'medium';
    this.speedX = getRandomNumber(0.5, 2.5);
    this.x = 0;
    this.y = 0;
    this.createElement();
  }

  _createClass(Fish, [{
    key: 'createElement',
    value: function createElement() {
      this.element = document.createElement('img');
      this.element.className = 'actor fish ' + this.size + '-fish';
      this.element.src = 'img/' + this.image + '.png';
      this.element.alt = this.image;
    }

    //these actions must happen after the element is appended to the DOM

  }, {
    key: 'afterCreation',
    value: function afterCreation() {
      var _this = this;

      // waitFor(10).then(this.setDimensions.bind(this));
      waitFor(10).then(function () {
        _this.setDimensions();
      });
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      this.width = this.element.offsetWidth;
    }
  }, {
    key: 'update',
    value: function update() {
      var fishRight = this.x + this.width;
      if (fishRight >= MAX_X || this.x < MIN_X) {
        this.speedX *= -1;
        this.orientation *= -1;
      }

      this.x += this.speedX;
      this.y = sineWave(this.x, this.amplitude, this.frequency, this.depth);

      this.y = Math.max(MIN_Y, this.y); // Keep fish in tank, just in case
      this.y = Math.min(MAX_Y, this.y);
    }
  }, {
    key: 'display',
    value: function display() {
      this.element.style.left = this.x;
      this.element.style.top = this.y;
      var scaleString = 'scaleX(' + this.orientation + ')';
      this.element.style.transform = 'scaleX(' + this.orientation + ')';
    }
  }]);

  return Fish;
}();