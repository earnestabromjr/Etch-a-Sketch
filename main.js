const container = document.getElementById('container');

const inputColumns = 16;
const inputRows = 16;

// Loop to create varied number of divs
for (let i = 0; i < inputRows * inputColumns; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item')
    container.appendChild(gridDiv);
}

