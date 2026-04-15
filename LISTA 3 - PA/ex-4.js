const input = require('readline-sync')


let numero1 = input.questionInt('Digite um número: ')
let numero2 = input.questionInt('Digite um número: ')
let numero3 = input.questionInt('Digite um número: ')


let resp1 = numero1 + 5
let resp2 = numero2 + 5
let resp3 = numero3 + 5


if(resp1 > 10){
    console.log('O resultado é: ', resp1)
}


if(resp2 > 10){
    console.log('O resultado é: ', resp2)
}


if(resp3 > 10){
    console.log('O resultado é: ', resp3)
}
