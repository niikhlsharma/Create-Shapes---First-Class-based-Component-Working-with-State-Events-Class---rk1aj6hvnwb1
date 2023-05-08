import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));

const shapeType = document.getElementById('shape-type');
const addShapeBtn = document.getElementById('add-shape');
const shapesHolder = document.getElementById('shapes-holder');

addShapeBtn.addEventListener('click', function() {
  const selectedShape = shapeType.value;
  const newShape = document.createElement('div');
  
  if (selectedShape === 'square') {
    newShape.classList.add('square');
  } else if (selectedShape === 'circle') {
    newShape.classList.add('circle');
  }
  
  shapesHolder.appendChild(newShape);
});
