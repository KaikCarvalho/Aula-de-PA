const input = require('readline-sync')


let numero1 = input.questionInt('Digite um número: ')
let numero2 = input.questionInt('Digite um número: ')
let numero3 = input.questionInt('Digite um número: ')


let resp1 = numero1 + 10
let resp2 = numero2 - 5
let resp3 = numero3 * 2


console.log('O resultado é: ', resp1)
console.log('O resultado é: ', resp2)
console.log('O resultado é: ', resp3)
