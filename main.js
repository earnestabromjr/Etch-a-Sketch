const container = document.getElementById('container');

const inputColumns = 16;
const inputRows = 16;

// Loop to create varied number of divs
function setup(inputColumns, inputRows) {
    for (let i = 0; i < inputRows * inputColumns; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item')
        container.appendChild(gridDiv);
    }
}

function changeColors(element) {
    element.style.backgroundColor = "darkblue";
}

setup(inputColumns, inputRows);
const buttonContainer = document.getElementById('buttons-container');
const divNumber = document.getElementById('divNumber');

const newGrid = container.childNodes;
newGrid.addEventListener('mouseleave', (e) => {
    newGrid.onmousemove =
})
