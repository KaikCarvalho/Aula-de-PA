const input = require('readline-sync')


let numero = input.questionInt('Digite um número: ')


let resp = numero + 5


if(resp > 10){
    console.log('O resultado é: ', resp)
}
