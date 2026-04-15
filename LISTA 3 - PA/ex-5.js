const input = require('readline-sync')


let numero1 = input.questionInt('Digite um número: ')
let numero2 = input.questionInt('Digite um número: ')


let resp1 = numero1 + numero2


if(resp1 < 20){
    console.log('O resultado é: ', numero1 * 10)
    console.log('O resultado é: ', numero2 * 10)
}
