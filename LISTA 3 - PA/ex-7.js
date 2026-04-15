let input = require("readline-sync");

let numero1 = input.questionInt("Digite um numero: ");

let numero2 = input.questionInt("Digite um numero: ");

let numero3 = input.questionInt("Digite um numero: ");

let resultado = numero1 + numero2 + numero3;


if (resultado > 20) {
    console.log("Seu resultado é maior q 20, seu resultado é:  " + resultado);
}
