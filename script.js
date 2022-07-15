const container = document.querySelector('.container');

// Allows for a changing square template. If a rectangular design is eventually decided on, sqrt code will need to change.
const oneDimension = 10;
const resolution = oneDimension ** 2; 

for (let i = 1; i <= resolution; i++) {
    const divSquare = document.createElement('div');
    divSquare.setAttribute('class', 'square');
    divSquare.addEventListener('mouseover', () => {
        divSquare.classList.add('activated');
    });
    container.appendChild(divSquare);
}

