const container = document.getElementById('container');

let inputColumns = 16;
let inputRows = 16;

// Loop to create varied number of divs
function setup(inputColumns, inputRows) {
    for (let i = 0; i < inputRows * inputColumns; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');
        gridDiv.addEventListener('mouseover', changeColors);

        container.appendChild(gridDiv);
    }
}

function changeColors(element) {
    element.target.style.backgroundColor = "#36013f";
}

function resetGrid() {
    const cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function changeGrid() {
    inputColumns = parseInt(prompt("Enter Column number: "));
    inputRows = prompt(("Enter Row number: "));
    const cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.style.width = inputColumns + 'px';
        cell.style.height = inputRows + 'px';
    })
    setup(inputColumns = 16, inputRows = 16);
}

setup(inputColumns, inputRows);
const buttonContainer = document.getElementById('buttons-container');
const divNumber = document.getElementById('divNumber');


