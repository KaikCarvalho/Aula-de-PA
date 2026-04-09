const input = require('readline-sync')


let numero1 = input.questionInt('Digite um número: ')
let resp1 = numero1 - 3


let numero2 = input.questionInt('Digite um número: ')
let resp2 = numero2 + 2


let resp3 = resp1 + resp2 - 1


console.log('O resultado é: ', resp3)
