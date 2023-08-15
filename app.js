let size = 16;

const sketchBoxContainer = document.getElementById('sketch-box');
sketchBoxContainer.style.cssText = `display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);`;

for (let i = 1; i < size * size; i++) {
  const gridDiv = document.createElement('div');
  sketchBoxContainer.appendChild(gridDiv);
}

function changeGridElementColor(div) {
  div.style.backgroundColor = 'black';
}

const gridElements = document.querySelectorAll('#sketch-box div');
gridElements.forEach(div => {
  div.addEventListener('mouseover', () => changeGridElementColor(div));
});
