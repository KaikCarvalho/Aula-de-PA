let input = require("readline-sync")

let a = input.questionInt("Digite o primeiro número: ");
let b = input.questionInt("Digite o segundo número: ");
let c = input.questionInt("Digite o terceiro número: ");
let d = input.questionInt("Digite o quarto número: ");


let soma1 = a + b;
let sub = c - d;
let resultado = soma1 + sub;


if (resultado > 10) {
    console.log("Resultado maior que 10");
} else {
    console.log("Resultado menor ou igual a 10");
