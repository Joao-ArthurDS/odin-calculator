let x,y,firstOperator,secondOperator;
let newNumber = false;
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');
const finishers = document.querySelectorAll('.finishers');

numbers.forEach((number) => number.addEventListener('click',checkNumber));
operations.forEach((operation) => operation.addEventListener('click',operate));
finishers.forEach((finisher) => finisher.addEventListener('click',finishOperation));

function checkNumber(e){
    let n = e.target.innerHTML;
    let screen = document.querySelector("#visor");

    if (newNumber){
        screen.value = "";
        newNumber = false;
    };

    if (screen.value == 0 && n != "0"){
        screen.value = String(n);
    } else if (screen.value != 0){
        screen.value = String(screen.value) + String(n);
    };
};

function operate(e){
    const screen = document.querySelector("#visor");
    const operation = e.target.id;

    if (x === undefined){
        x = Number(screen.value);
        firstOperator = operation;
        screen.value = String(0);
        return;
    } else if (y === undefined){
        y = Number(screen.value);
        secondOperator = operation;
    };
     
    switch(firstOperator){
        case "sum":
            x += y;
            break;
        case "subtract":
            x -= y;
            break;
        case "multiply":
            x *= y;
            break;
        case "divide":
            x /= y;
            break;
    };
        firstOperator = secondOperator;
        secondOperator = undefined;
        y = undefined;
        newNumber = true;
        screen.value = String(x);
};

function finishOperation(e){
    let operation = e.target.id;
    const screen = document.querySelector("#visor");
    
    if (operation === "clear"){
        x = undefined;
        y = undefined;
        newNumber = false;
        firstOperator = undefined;
        secondOperator = undefined;
        screen.value = String(0);
        return;
    };

    if (firstOperator != undefined){
        y = Number(screen.value);
        switch(firstOperator){
            case "sum":
                x += y;
                break;
            case "subtract":
                x -= y;
                break;
            case "multiply":
                x *= y;
                break;
            case "divide":
                x /= y;
                break;
        };
        y = undefined;
        newNumber = true;
        firstOperator = undefined;
        screen.value = String(x);
        // x = undefined;
    };

};