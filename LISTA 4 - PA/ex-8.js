let input = require("readline-sync")

let num = input.questionInt("Digite um número: ");
let resultado;


if (num > 10) {
    resultado = num + 5;
} else {
    resultado = num + 20;
}


if (resultado > 25) {
    console.log("Resultado maior que 25");
} else {
    console.log("Resultado menor ou igual a 25");
}
