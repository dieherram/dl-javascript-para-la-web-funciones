let divSquare1 = document.querySelector('#square-1')
let divSquare2 = document.querySelector('#square-2')
let divSquare3 = document.querySelector('#square-3')
let divSquare4 = document.querySelector('#square-4')

const toBlack = (element, color) => {
    element = document.querySelector(`#${element}`)
    element.style.backgroundColor = color
}

divSquare1.addEventListener('click', () => {
    toBlack(divSquare1.id, 'black')
});

divSquare2.addEventListener('click', () => {
    toBlack(divSquare2.id, 'black')
});

divSquare3.addEventListener('click', () => {
    toBlack(divSquare3.id, 'black')
});

divSquare4.addEventListener('click', () => {
    toBlack(divSquare4.id, 'black')
});