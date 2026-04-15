let input = require("readline-sync")

let a = input.questionInt("Digite o primeiro número: ");
let b = input.questionInt("Digite o segundo número: ");
let c = input.questionInt("Digite o terceiro número: ");


let maior = a;


if (b > maior) {
    maior = b;
}
if (c > maior) {
    maior = c;
}


console.log("Maior = " + maior);
