let input = require("readline-sync")

let n1 = input.questionInt("Digite o primeiro número: ");
let n2 = input.questionInt("Digite o segundo número: ");


if (n1 < n2) {
    console.log("Menor = " + n1);
} else {
    console.log("Menor = " + n2);
}