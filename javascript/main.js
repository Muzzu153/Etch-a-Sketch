function changeGridSize(number) {
  let container = document.getElementById(`container`);
  totalNumber = number * number;
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < totalNumber; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid_square");

    let cellwidth = container.clientWidth / number + `px`;
    let cellheight = container.clientHeight / number + `px`;

    gridSquare.setAttribute(
      `style`,
      `width: ${cellwidth}; height: ${cellheight};`
    );
    container.appendChild(gridSquare);
    changeSquareBgColor();
  }
}

function changeSquareBgColor() {
  let color = document.getElementById(`colour_picker`);
  let choosenColour = color.value;

  color.addEventListener(`change`, function () {
    gridSquare.style.backgroundColor = choosenColour;
  });
}

let range = document.getElementById(`grid_range`);
let gridSize = document.getElementById(`grid_size`);
range.addEventListener(`change`, ()=>{
  gridSize.textContent = range.value;
  changeGridSize(range.value);
})

let increaseSize = document.getElementById(`arrow_up`);
increaseSize.addEventListener(`click`, ()=> {
  range.value++
  gridSize.textContent = range.value;
  changeGridSize(range.value);
});

let decreaseSize = document.getElementById(`arrow_down`);
decreaseSize.addEventListener(`click`, ()=> {
  range.value--
  gridSize.textContent = range.value;
  changeGridSize(range.value);
});

