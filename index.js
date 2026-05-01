const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');

numbers.forEach((number) => addEventListener('click',operate));
operations.forEach((operation) => addEventListener('click',operate));

function operate(e){
    let x,y,z;
    z = e.target.innerHTML;
    console.log(z);
}