let order = []
let clickedOrder = []
let scores = 0;

//0 - blue
//1 - yellow
//2 - red
//3 - green
//4 - pink
//5 - orange
//6 - purple
//7 - aquamarine

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');
const aquamarine = document.querySelector('.aquamarine');

let shuffleOder = () => {
    let colorOrder = Math.floor(Math.random() *8);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number[i] + 1);
    }
}

let lightColor = (element, number) => {
    number = number = 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

let checkOrder = () => {
for(let i in clickedOrder) {
if()
}
}
