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
      return; // Exit the function without creating more shapes
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
      newShape.style.borderRadius = '50%'; // Create a circle
  }

  const shapeInfo = new Shape(shapeType, color);

  const infoText = document.createElement('p');
  infoText.textContent = `Box ${shapeCount + 1}: ${shapeInfo.getInfo()}`; // Include box number

  // Add click event to show/hide shape info
  newShape.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up
      infoText.style.display = 'block';
  });

  // Add click event to hide shape info when clicking outside the shape
  document.addEventListener('click', function(event) {
      if (event.target !== newShape) {
          infoText.style.display = 'none';
      }
  });

  // Clear existing shape information before adding new one
  const infoContainer = document.getElementById('shapeInfoContainer');
  infoContainer.innerHTML = ''; // Clear previous info

  infoContainer.appendChild(infoText); // Append new shape info

  shapeContainer.appendChild(newShape);

  shapeCount++;

  if (shapeCount === 25) {
      console.log('Shape limit reached. No more shapes will be added.');
  }
}
