let container = document.getElementById(`container`);
// let cellblocks = [];
function createGrid(number) {
  totalNumber = number * number;
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < totalNumber; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid_square");

    let cellwidth = container.clientWidth / number + `px`;
    let cellheight = container.clientHeight / number + `px`;

    gridSquare.style.width = `${cellwidth}`;
    gridSquare.style.height = `${cellheight}`;
    gridSquare.addEventListener("mouseover", handleGridSquareMouseOver);
    container.appendChild(gridSquare);
  }
}

let clear = document.getElementById(`clear`);
clear.addEventListener(`click`, clearAll);

function clearAll() {
  for (let box of container.children) {
    box.style.backgroundColor = "";
  }
}

function doIncrementalShading() {}


let shadingButton = document.getElementById('shading');
shadingButton.addEventListener('click', ()=>{
  currentColorMode = "shading";
}); 

let rainbowButton = document.getElementById(`rainbow`);
let colorPicker = document.getElementById(`colour_picker`);

// let currentColorMode = color.value;
function handleGridSquareMouseOver(event) {
  if (currentColorMode === colorPicker.value) {
    // Use user-selected color
    event.target.style.backgroundColor = colorPicker.value;
  } else if (currentColorMode === "rainbow") {
    // Use random color for the rainbow mode
    event.target.style.backgroundColor = getRandomColor();
  } 
  else if (currentColorMode === "erase") {
    event.target.style.backgroundColor = "#dfebea";
  }
}
function getRandomColor() {
  // Function to generate a random hex color
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
rainbowButton.addEventListener("click", () => {
  // Set the current mode to rainbow
  currentColorMode = "rainbow";
});

colorPicker.addEventListener('change', ()=>{
  currentColorMode = colorPicker.value;
})

// You can also add an event listener for the color picker change if needed
// color.addEventListener("input", () => {
//   // Update the existing grid with the new color
//   currentColorMode = "user";
//   updateGridColor(color.value);
// });

let erase = document.getElementById('eraser');
erase.addEventListener("click", () => {
  currentColorMode = "erase";
});


document.addEventListener("DOMContentLoaded", () => {
  createGrid(range.value);
  currentColorMode = colorPicker.value;
});

// when the user changes the slider value the grid size changes
let range = document.getElementById(`grid_range`);
let gridSize = document.getElementById(`grid_size`);
range.addEventListener(`change`, () => {
  gridSize.textContent = range.value;
  createGrid(range.value);
});

let increaseSize = document.getElementById(`arrow_up`);
increaseSize.addEventListener(`click`, (event) => {
  range.value++;
  gridSize.textContent = range.value;
  createGrid(range.value);
});

let decreaseSize = document.getElementById(`arrow_down`);
decreaseSize.addEventListener(`click`, (event) => {
  range.value--;
  gridSize.textContent = range.value;
  createGrid(range.value);
});
