const input = require('readline-sync')


let numero1 = input.questionInt('Digite um número: ')
let resp1 = numero1 + 10


let numero2 = input.questionInt('Digite um número: ')
let resp2 = numero2 / 2


console.log('O resultado é: ', resp1)
console.log('O resultado é: ', resp2)
