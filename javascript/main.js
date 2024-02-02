// parent conatiner of the grid sqaures 
let container = document.getElementById(`container`);

// Buttons to for user input 
let rainbowButton = document.getElementById(`rainbow`);
let colorPicker = document.getElementById(`colour_picker`);
let shadingButton = document.getElementById('shading');
let eraseButton = document.getElementById('eraser');
let clearButton = document.getElementById(`clear`);


// to change the size of grid 
let range = document.getElementById(`grid_range`);
let gridSize = document.getElementById(`grid_size`);
let increaseSize = document.getElementById(`arrow_up`);
let decreaseSize = document.getElementById(`arrow_down`);


// default values on page load 
document.addEventListener('DOMContentLoaded', () => {
  createGrid(range.value);
  currentColorMode = colorPicker.value;
});


// function which creates the grid 
function createGrid(number) {
  totalNumber = number * number;

  // deleted the current grid everytime the size changes 
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }


  for (let i = 0; i < totalNumber; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid_square');

    let cellwidth = container.clientWidth / number + 'px';
    let cellheight = container.clientHeight / number + 'px';

    gridSquare.style.width = `${cellwidth}`;
    gridSquare.style.height = `${cellheight}`;
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', handleGridSquareMouseOver);
  }
}

// function which decides what action to perform when the mouseover() event happens on the grid squares 
function handleGridSquareMouseOver(event) {
  if (currentColorMode === colorPicker.value) {
    // Use user-selected color
    event.target.style.backgroundColor = colorPicker.value;
  } else if (currentColorMode === 'rainbow') {
    // Use random color for the rainbow mode
    event.target.style.backgroundColor = getRandomColor();
  } 
  else if (currentColorMode === 'erase') {
    event.target.style.backgroundColor = '#dfebea';
  }
}

// function to get random colors for Rainbow button 
function getRandomColor() {
  // Function to generate a random hex color
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// A function that clears the gridsquares from thier current colors  
function clearAll() {
  for (let box of container.children) {
    box.style.backgroundColor = '';
  }
}

// function doIncrementalShading() {

// }

colorPicker.addEventListener('change', ()=>{
  // stores the current color picker value 
  currentColorMode = colorPicker.value;
})


rainbowButton.addEventListener('click', () => {
  // Set the current mode to rainbow
  currentColorMode = 'rainbow';
});


shadingButton.addEventListener('click', ()=>{
  // Set the current mode to shading
  currentColorMode = 'shading';
}); 

eraseButton.addEventListener('click', () => {
  // Set the current mode to erase
  currentColorMode = 'erase';
});

clearButton.addEventListener(`click`, clearAll);


// when the user changes the slider value the grid size changes
range.addEventListener('change', () => {
  gridSize.textContent = range.value;
  createGrid(range.value);
});

increaseSize.addEventListener('click', () => {
  range.value++;
  gridSize.textContent = range.value;
  createGrid(range.value);
});

decreaseSize.addEventListener('click', () => {
  range.value--;
  gridSize.textContent = range.value;
  createGrid(range.value);
});

// You can also add an event listener for the color picker change if needed
// color.addEventListener("input", () => {
//   // Update the existing grid with the new color
//   currentColorMode = "user";
//   updateGridColor(color.value);
// });