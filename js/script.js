var num1 = 10;


function mais() {
    num1++;
    console.log(num1)
    var resultado = document.querySelector('span');
    resultado.innerHTML = `Resultado: ${num1}`
}

var num2 = 57;
function menos() {
    num2--;
    console.log(num2)
    var resultado = document.querySelector('span');
    resultado.innerHTML = `Resultado: ${num2}`
}