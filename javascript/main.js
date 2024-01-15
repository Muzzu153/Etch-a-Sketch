
function getGridSize(number) {
    let container = document.getElementById(`container`);
    totalNumber = number * number;
    container.innerHTML = ``;

    for (let i = 0; i < totalNumber; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid_square');

        let cellwidth = container.clientWidth / number + `px`;
        let cellheight = container.clientHeight / number + `px`;

        // console.log(container);
        gridSquare.setAttribute(`style`, `width: ${cellwidth}; height: ${cellheight};`);

        container.appendChild(gridSquare);
    }
}
