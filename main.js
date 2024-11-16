// Loop to create varied number of divs
function setup(gridNumber) {
    const container = document.getElementById('container');
    container.id = 'container';
    createCells(gridNumber, container);
}

function createCells(gridNumber, container) {
    for (let i = 0; i < gridNumber ** 2; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');
        gridDiv.style.height = (256 / gridNumber) + 'px';
        gridDiv.style.width = 'auto';
        gridDiv.addEventListener('mouseover', changeColors);

        container.appendChild(gridDiv);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors(element) {
    element.target.style.backgroundColor = getRandomColor();
}

function resetGrid() {
    const cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.style.backgroundColor =  '#4CAF50';
    });
}

function changeGrid() {
    let gridNumber = parseInt(prompt("Enter number of squares per side: "));
    if (gridNumber > 99) {
        alert("Number must be less than 100")
        return;
    }
    const container = document.getElementById('container');

    container.innerHTML = '';
    createCells(gridNumber, container);
    let gridDiv = document.getElementById('grid-item');
    gridDiv.style.width = 'auto';
    gridDiv.style.height = 'auto';
}

setup(16);
const buttonContainer = document.getElementById('buttons-container');
const divNumber = document.getElementById('divNumber');


