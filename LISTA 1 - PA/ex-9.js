const input = require('readline-sync')


let numero = input.questionInt('Digite um número: ')


let resp1 = numero - 3


let resp2 = resp1 + numero


console.log('O resultado é: ', resp2)
