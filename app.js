let size = 16;
let paintMode = true;
let currentColor = 'black';

const sketchBoxContainer = document.getElementById('sketch-box');
sketchBoxContainer.style.cssText = 'display: grid; grid-template-columns:'
+ 'repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);';

for (let i = 1; i <= size * size; i++) {
  const gridDiv = document.createElement('div');
  sketchBoxContainer.appendChild(gridDiv);
}

function setupBoard() {
  for (let i = 1; i <= size * size; i++) {
    const gridDiv = document.createElement('div');
    sketchBoxContainer.appendChild(gridDiv);
  }
}

function changeGridElementColor(div) {
  if (!paintMode) div.style.backgroundColor = 'white';
  else div.style.backgroundColor = currentColor;
}

const gridElements = document.querySelectorAll('#sketch-box div');
gridElements.forEach(div => {
  div.addEventListener('mouseover', () => changeGridElementColor(div));
});

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

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => clearBoard());

window.addEventListener("load", () => setupBoard());
