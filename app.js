let gridSize = 16;
let paintMode = false;
let currentColor = 'black';
let rainbowMode = false;

const sketchBoxContainer = document.getElementById('sketch-box');
sketchBoxContainer.style.cssText = 'display: grid; grid-template-columns:'
+ 'repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);';

// for (let i = 1; i <= gridSize * gridSize; i++) {
//   const gridDiv = document.createElement('div');
//   sketchBoxContainer.appendChild(gridDiv);
// }
//https://www.google.com/search?client=firefox-b-e&q=firefox+filter+output

function setupBoard() {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const gridDiv = document.createElement('div');
    sketchBoxContainer.appendChild(gridDiv);
  }

  const gridElements = document.querySelectorAll('#sketch-box div');
  gridElements.forEach(div => {
  div.addEventListener('mouseover', () => changeGridElementColor(div));
});
}

function changeGridElementColor(div) {
  if (!paintMode) {
    div.style.backgroundColor = 'white';
    return;
  } 
  if (rainbowMode) {
    currentColor = getRandomColor();
    div.style.backgroundColor = currentColor;
    return;
  } 
  else div.style.backgroundColor = currentColor;
}

function setPaintButtonState(state) {
  if (state) {
    paintModeButton.classList.add('paint');
    paintModeButton.innerHTML = 'Paint Mode(P)';
    paintMode = true;
  } else {
    paintModeButton.classList.remove('paint');
    paintModeButton.innerHTML = 'Erase Mode(E)';
    paintMode = false;
  }
}

const paintModeButton = document.getElementById('paint-btn');
paintModeButton.addEventListener('click', () => {
  (!paintModeButton.getAttribute('class').includes('paint')) ?
  setPaintButtonState(true) : setPaintButtonState(false);
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyP') setPaintButtonState(true);
  if (e.code === 'KeyE') setPaintButtonState(false);
});

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
});

function clearBoard() {
  sketchBoxContainer.innerHTML = '';
  setupBoard();
}

const rainbowButton = document.getElementById('rainbow-btn');
rainbowButton.addEventListener('click', () => {
  if (rainbowMode) {
    rainbowMode = false;
    currentColor = 'black';
  } else {
    rainbowMode = true;
  }
  rainbowButton.classList.toggle('on');
});

function getRandomColor() {
  const randomR = Math.floor(Math.random() * 255) + 1;
  const randomG = Math.floor(Math.random() * 255) + 1;
  const randomB = Math.floor(Math.random() * 255) + 1;

  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => clearBoard());

window.addEventListener("load", () => setupBoard());
