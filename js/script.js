//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


function changeColor(){
    let randomSelection = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("body").style.backgroundColor = randomSelection;
}

