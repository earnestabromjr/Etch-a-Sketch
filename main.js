// Loop to create varied number of divs
function setup(inputColumns, inputRows) {
    const container = document.getElementById('container');
    container.id = 'container';
    createCells(16, 16, container);
}

function createCells(inputColumns, inputRows, container) {
    for (let i = 0; i < inputRows * inputColumns; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');
        gridDiv.style.height = (256 / inputColumns) + 'px';
        gridDiv.style.width = 'auto';
        // container.style.width = (inputColumns * inputRows) +'px';
        gridDiv.addEventListener('mouseover', changeColors);

        container.appendChild(gridDiv);
    }
}

function changeColors(element) {
    element.target.style.backgroundColor = "darkgreen";
}

function resetGrid() {
    const cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.style.backgroundColor =  '#4CAF50';
    });
}

function changeGrid() {
    let inputColumns = parseInt(prompt("Enter Column number: "));
    let inputRows = prompt(("Enter Row number: "));
    const container = document.getElementById('container');
    let cells = container.childNodes;
    cells.forEach(cell => {
        cell.remove();
    })
    container.innerHTML = '';
   createCells(inputColumns, inputRows, container);
    let gridDiv = document.getElementById('grid-item');
    gridDiv.style.width = 'auto';
    gridDiv.style.height = 'auto';
    // container.style.width = inputColumns * inputRows + 'px';
    // const cells = document.getElementsByClassName('grid-item');
    // Array.from(cells).forEach(cell => {
    //     cell.style.width = inputColumns + 'px';
    //     cell.style.height = inputRows + 'px';
    // })
}

setup(16, 16);
const buttonContainer = document.getElementById('buttons-container');
const divNumber = document.getElementById('divNumber');


