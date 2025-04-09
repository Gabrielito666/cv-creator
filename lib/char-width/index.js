const { createCanvas } = require('canvas');

function getCharsWidth(caracters, fontFamily = 'Arial', fontSize = 16) {
  const canvas = createCanvas(200, 50); // No importa mucho el tamaño
  const ctx = canvas.getContext('2d');

  ctx.font = `${fontSize}px ${fontFamily}`;
  const metrics = ctx.measureText(caracters);

  return metrics.width;
}

module.exports = getCharsWidth;