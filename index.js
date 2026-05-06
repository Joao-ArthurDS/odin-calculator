let x,y,operator;

const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');
const finishers = document.querySelectorAll('.finishers');

numbers.forEach((number) => number.addEventListener('click',checkNumber));
operations.forEach((operation) => operation.addEventListener('click',operate));
finishers.forEach((finisher) => finisher.addEventListener('click',finishOperation));

function checkNumber(e){
    let n = e.target.innerHTML;
    let screen = document.querySelector("#visor");

    if (screen.value == 0 && n != 0){
        screen.value = String(n);
    } else if (screen.value != 0){
        screen.value = String(screen.value) + String(n);
    };
};

function operate(e){
    const screen = document.querySelector("#visor");
    let operation = e.target.id;

    if (x === undefined){
        x = Number(screen.value);
        screen.value = String(0);
        return;
    } else if (y === undefined){
        y = Number(screen.value);
        return;
    } else {
        
    };

        y = undefined;
        screen.value = String(x);
};

function finishOperation(e){
    let operation = e.target.id;
};