let input = require("readline-sync")

let a = input.questionInt("Digite o primeiro número: ");
let b = input.questionInt("Digite o segundo número: ");
let c = input.questionInt("Digite o terceiro número: ");


let menor, meio, maior;


if (a <= b && a <= c) {
    menor = a;
    if (b <= c) {
        meio = b;
        maior = c;
    } else {
        meio = c;
        maior = b;
    }
} else if (b <= a && b <= c) {
    menor = b;
    if (a <= c) {
        meio = a;
        maior = c;
    } else {
        meio = c;
        maior = a;
    }
} else {
    menor = c;
    if (a <= b) {
        meio = a;
        maior = b;
    } else {
        meio = b;
        maior = a;
    }
}
