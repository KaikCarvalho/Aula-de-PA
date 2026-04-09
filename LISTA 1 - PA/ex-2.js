const input = require('readline-sync')


let numero = input.questionInt ('Digite um Número: ')
let resp = (numero - 3)*2


console.log('O resultado é : ', resp)
