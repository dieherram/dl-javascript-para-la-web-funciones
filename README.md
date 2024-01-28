# Desafío 4 - Funciones 🚀

¡Hola nuevamente! 👋

En este desafío, exploré conceptos relacionados con funciones, eventos y manipulación del DOM para realizar distintas tareas. A continuación, te detallo cada uno de los problemas abordados.

## Ejercicio 1 - Transformación de Funciones 📝

En este ejercicio, transformé la declaración de una función a una función de expresión.

```javascript
let example = function (a, b, c) {
    return a + b + c
}
```

## Ejercicio 2 - Arrow Function de una Línea 🏹

En esta parte, transformé una función a una arrow function de una línea.

```javascript
let suma = (a, b) => a + b
```

## Ejercicio 2.1, 2.2 y 2.3 - Pintar Elemento al Clic 🎨

Para este ejercicio, creé una página HTML y un script para cambiar el color de un elemento al hacer clic.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafío 4 - Pintar</title>
</head>

<body>
    <div id="ele1" style="font-size: 100px;"> hello </div>
    <script src="assets/js/script.js"></script>
</body>

</html>
```

```javascript
const ele = document.getElementById("ele1")

function pintar(element, color = 'green') {
    element.style.backgroundColor = color
}

ele.addEventListener("click", function () {
    pintar(ele, 'yellow')
});
```

## Ejercicio 3 - Cambiar Color de Divs al Clic 🌈

En este desafío, construí una página web con cuatro divs de diferentes colores. Al hacer clic en cada uno, el color cambia a negro.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafío 4 - Colores</title>
</head>

<body style="display: flex; justify-content: center; flex-wrap: wrap;">
    <div id="square-1" style="height: 200px; width: 200px; background-color:blue;"></div>
    <div id="square-2" style="height: 200px; width: 200px; background-color:red;"></div>
    <div id="square-3" style="height: 200px; width: 200px; background-color:green;"></div>
    <div id="square-4" style="height: 200px; width: 200px; background-color:yellow;"></div>
    <script src="assets/js/4_colores.js"></script>
</body>

</html>
```

```javascript
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
```

## Ejercicio 3.1 - Cambiar/Crear Div y Color al Presionar Teclas ⌨️

En este ejercicio, creé una página junto a un script que cambia el color del div existente o crea un nuevo div, dependiendo de la letra del teclado presionada.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Desafío 4 - Key</title>
</head>

<body>
    <div id="key"></div>

    <script src="assets/js/5_key.js"></script>
</body>

</html>
```

```javascript
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
```