Math.tau = 2 * Math.PI;

const sineWave = (x, amplitude, frequency, depth) => {
  return (amplitude * Math.sin(Math.tau * frequency * x)) + depth;
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const waitFor = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
