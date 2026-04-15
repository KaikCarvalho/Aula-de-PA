const input = require('readline-sync')


let numero = input.questionInt('Digite um número: ')


let resp = numero - 10


if(resp > 3){
    console.log('O resultado é: ', resp)
}
