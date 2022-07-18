const container = document.querySelector('.container');

// Allows for a changing square template. If a rectangular design is eventually decided on, sqrt code will need to change.
// const oneDimension = 100;
// const resolution = oneDimension ** 2; 

const resolution = 128 * 72;

for (let i = 1; i <= resolution; i++) {
    const divSquare = document.createElement('div');
    divSquare.setAttribute('class', 'square');
    divSquare.addEventListener('mouseover', () => {
        divSquare.classList.add('activated');
    });
    container.appendChild(divSquare);
}

// document.addEventListener("keydown", function (e) {

// })

// const arrowArray = [...document.querySelectorAll('.arrow')];
// for (let arrow of arrowArray)
// const lArr = document.querySelector('#l-ar');
// const rArr = document.querySelector('#r-ar');
// const uArr = document.querySelector('#u-ar');
// const dArr = document.querySelector('#d-ar');

// function Keycoder (arrow, keyCode) {
//     this.arrow = arrow;
//     this.keyCode = keyCode;
// }