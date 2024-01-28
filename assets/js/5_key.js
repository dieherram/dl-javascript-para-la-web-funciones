let color
let divColor = document.querySelector('div')
let body = document.querySelector('body')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = 'pink'
        divColor.style.backgroundColor = color
    } else if (event.key === 's' || event.key === 'S') {
        color = 'orange'
        divColor.style.backgroundColor = color
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'lightblue'
        divColor.style.backgroundColor = color
    } else if (event.key === 'q' || event.key === 'Q') {
        createDiv('purple')
    } else if (event.key === 'w' || event.key === 'W') {
        createDiv('lightgrey')
    } else if (event.key === 'e' || event.key === 'E') {
        createDiv('brown')
    }
})

const createDiv = (color) => {
    let newDiv = document.createElement('div')
    let cssToDiv = `width: 200px; height: 200px; border: 3px solid black; background-color: ${color}`
    newDiv.style.cssText = cssToDiv;
    body.appendChild(newDiv);
}