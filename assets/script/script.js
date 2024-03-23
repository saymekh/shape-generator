'use strict';

class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `Shape: ${this._name}, Color: ${this._color}`;
  }
}

let shapesArray = [];
let shapeCount = 0;

function createShape() {
  if (shapeCount >= 25) {
    return; 
  }

  const shapeSelect = document.getElementById('shapeSelect');
  const colorSelect = document.getElementById('colorSelect');

  const shapeType = shapeSelect.value;
  const color = colorSelect.value;

  const shapeContainer = document.getElementById('shapeContainer');
  const newShape = document.createElement('div');

  newShape.className = 'shape';
  newShape.style.backgroundColor = color;

  if (shapeType === 'circle') {
    newShape.style.borderRadius = '50%'; 
  }

  const shapeInfo = new Shape(shapeType, color);

  const infoText = document.createElement('p');
  infoText.textContent = `Box ${shapeCount + 1}: ${shapeInfo.getInfo()}`; 

  // clears shape information before adding new one
  const infoContainer = document.getElementById('shapeInfoContainer');
  infoContainer.innerHTML = ''; // Clears previous info

  infoContainer.appendChild(infoText);

  shapeContainer.appendChild(newShape);

  shapeCount++;

  if (shapeCount === 25) {
    console.log('Shape limit reached. No more shapes will be added.');
  }
}


