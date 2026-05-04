let x;
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');

numbers.forEach((number) => number.addEventListener('click',checkNumber));
operations.forEach((operation) => operation.addEventListener('click',operate));

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
    let y,operation;
    operation = e.target.id;
    console.log(z);

    if (x === undefined){
        x = document.querySelector("#visor").value;
    } else {
        y = document.querySelector("#visor").value;
    };


}