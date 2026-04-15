let input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

let resultado = numero / 2;

if (resultado > 20) {
    console.log("Seu resultado é maior q 20, seu resultado é:  " + resultado);
}
