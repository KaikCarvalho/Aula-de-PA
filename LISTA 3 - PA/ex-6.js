let input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

let resultado = numero * 3;

if (resultado > 15) {
    console.log("Seu resultado é maior q 15, seu resultado é:  " + resultado);
}
