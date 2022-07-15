const container = document.querySelector('.container');

// Allows for a changing square template. If a rectangular design is eventually decided on, sqrt code will need to change.
const oneDimension = 100;
const resolution = oneDimension ** 2; 

for (let i = 1; i <= resolution; i++) {
    if ((i-1) % Math.sqrt(resolution) === 0) {
        const breakSquare = document.createElement('div');
        breakSquare.setAttribute('class', 'break');
        container.appendChild(breakSquare);
    }
    const divSquare = document.createElement('div');
    divSquare.setAttribute('class', 'square');
    divSquare.addEventListener('mouseover', () => {
        divSquare.classList.add('activated');
    });
    container.appendChild(divSquare);
}

