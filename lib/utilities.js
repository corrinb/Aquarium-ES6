"use strict";

Math.tau = 2 * Math.PI;

var sineWave = function sineWave(x, amplitude, frequency, depth) {
  return amplitude * Math.sin(Math.tau * frequency * x) + depth;
};

var getRandomNumber = function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
};

var waitFor = function waitFor(milliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
};