let container = document.getElementById('gridContainer');
let color = document.getElementById('color');
let cell = document.createElement('div');
let gridSize = document.getElementById('gridSlider');
let reset = document.getElementById('button3');
let griddles = document.querySelectorAll('.grid');

function makeCells(rows, cols) {
  removeGrid(container);
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid";
    cell.onmouseover = function() {
      cell.style.backgroundColor = color.value;
      cell.style.transition = "0.15s ease-in-out";
      cell.addEventListener('mousedown', function() {
          cell.style.backgroundColor = "white";
          cell.style.transition = "0.15s ease-in-out";
      })
  }
}
}

function removeGrid(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  window.addEventListener('load', (event) => {
      makeCells(16,16);
    });
  
  reset.onclick = () => {
      makeCells(16,16);
      gridSize.value = 16;
  }
  
  gridSize.addEventListener('input', function() {
      makeCells(this.value, this.value)
  });