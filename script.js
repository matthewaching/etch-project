const container = document.querySelector('.container');
const eraser = document.querySelector('.eraser');
const resetter = document.querySelector('.resetter');
const lArr = document.querySelector('#l-ar');
const rArr = document.querySelector('#r-ar');
const uArr = document.querySelector('#u-ar');
const dArr = document.querySelector('#d-ar');

// Allows for a changing square template. If a rectangular design is eventually decided on, sqrt code will need to change.
// const oneDimension = 100;
// const resolution = oneDimension ** 2;

const resolution = 128 * 72;

const currentPixel = {
    'x': 1,
    'y': 1,
}

// Renders drawing surface

for (let i = 72; i >= 1; i--) {
    for (let j = 1; j <= 128; j++){
        const divSquare = document.createElement('div');
        divSquare.setAttribute('class', 'square');
        divSquare.addEventListener('mouseover', () => {
            divSquare.classList.add('activated');
        });
        divSquare.setAttribute('data-x', j);
        divSquare.setAttribute('data-y', i);
        container.appendChild(divSquare);
    }
}

const allSquares = container.querySelectorAll('.square');

eraser.addEventListener('click', () => allSquares.forEach((square) => square.classList.remove('activated')));

resetter.addEventListener('click', () => {
    currentPixel.x = 1;
    currentPixel.y = 1;
    runPixel();
})

document.addEventListener('keydown', e => {
    if (e.keyCode === 37) {
        lArr.classList.add('pressed');

        if (currentPixel.x > 1) {
            currentPixel.x--;
            runPixel();
        }
    }

    if (e.keyCode === 38) {
        uArr.classList.add('pressed');
       
        if (currentPixel.y < 72) {
            currentPixel.y++;
            runPixel();
        }
    }

    if (e.keyCode === 39) {
        rArr.classList.add('pressed');
        
        if (currentPixel.x < 128) {
            currentPixel.x++;
            runPixel();
        }
    }

    if (e.keyCode === 40) {
        dArr.classList.add('pressed');
        
        if (currentPixel.y > 1) {
            currentPixel.y--;
            runPixel();
        }
    }
});

document.addEventListener('keyup', e => {
    if (e.keyCode === 37) {
        lArr.classList.remove('pressed');
    }

    if (e.keyCode === 38) {
        uArr.classList.remove('pressed');
    }

    if (e.keyCode === 39) {
        rArr.classList.remove('pressed');
    }

    if (e.keyCode === 40) {
        dArr.classList.remove('pressed');
    }
});

// function runPixel(x, y) {
//     const findPixel = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
//     findPixel.classList.add('activated');
// }

// runPixel(currentPixel.x, currentPixel.y);

function runPixel() {
    const findPixel = document.querySelector(`[data-x='${currentPixel.x}'][data-y='${currentPixel.y}']`);
    findPixel.classList.add('activated');
}

runPixel();