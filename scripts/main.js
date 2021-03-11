let container = document.getElementById('gridContainer');
let clear = document.getElementById('button1');
let cell = document.createElement('div');
let gridSize = document.getElementById('gridSlider');
let reset = document.getElementById('button3');
let sliderLabel = document.getElementById('sliderLab');
let random = document.getElementById('button2');
let color = document.getElementById('color');
const rgbToggle = document.getElementById('rgbToggle');
let rgb = false;

function makeCells(rows, cols) {
  removeGrid(container);
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell);
    cell.setAttribute("class", "grid");
    sliderLabel.innerHTML = `${rows} x ${cols}`; 
      cell.addEventListener("mouseover", function() {
        if (rgb === true) {
          rbgMode();
              cell.style.backgroundColor = `${rgbColors}`;
              cell.style.transition = "0.15s ease-in";
      }
      else {
              cell.style.backgroundColor = color.value;
              cell.style.transition = "0.15s ease-in";
      }
      });
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

    color.addEventListener('change', function() {
      this.value = color.value;
    });
  
  reset.onclick = () => {
      makeCells(16,16);
      gridSize.value = 16;
  }
  
  gridSize.addEventListener('input', function() {
      makeCells(this.value, this.value)
  });

  clear.onclick = function () {
    let size = gridSize.value;
  makeCells(size, size);
  }

  random.onclick = function () {
  color.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  cell.style.backgroundColor = color.value;
  }

  rgbToggle.addEventListener('change', function() {
  if (this.checked) {
    rgb = true;
  }
  else {
    rgb = false;
    }
  });

  function rbgMode() {
    rgbColors = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
  }