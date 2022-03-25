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


//Cria a ordem aleatória das cores do jogo
let shuffleOder = () => {
    let colorOrder = Math.floor(Math.random() *8);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number[i] + 1);
    }
}


//Faz acender a próxima cor 
let lightColor = (element, number) => {
    number = number = 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}


//Verifica se os botões foram acionados e clicados na cor correta
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder [i] != order[i]) {
            lose();
            break;
        }
   }
   if(clickedOrder.length == order.length) {
       alert('Pontuação: ${score}\nVocê acertou!!! Vamos iniciar o próximo nível!');
       nextLevel();
   }
}

//Função para o usuário clicar
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout( () => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
}

//Função que faz retornar a cor de antes
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else 
}