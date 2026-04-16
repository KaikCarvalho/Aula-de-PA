let input = require("readline-sync")

let option = -1

while(option !== 0){
    option = input.questionInt("Escolha uma opcao: ")

    if(option === 0){
        console.log("sair")
    }
    else if(option === 1){
        console.log("Voce esta na opcao 1")
    }
    else if(option === 2){
        console.log("Voce esta na opcao 2")
    }
    else if(option === 3){
        console.log("Voce esta na opcao 3")
    }
    else{
        console.log("opcao invalida")
    }
}