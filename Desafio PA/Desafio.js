let input = require("readline-sync")

let option = -1

while(option !== 0){
    console.log("=========MENU==========")
    console.log("= 1 - Acessar Sistema")
    console.log("= 2 - Acessar Sistema")
    console.log("= 3 - Acessar Sistema")
    console.log("= 0 - Sair do Sistema")
    console.log("=======================")

    option = input.questionInt("Escolha uma opcao: ")

    if(option === 0){
        console.clear
        console.log("====")
        console.log("sair")
        console.log("====")
    }
    else if(option === 1){
        console.clear
        console.log("==================")
        console.log("Sistema da opcao 1")
        console.log("==================")
    }
    else if(option === 2){
        console.clear
        console.log("==================")
        console.log("Sistema da opcao 2")
        console.log("==================")
    }
    else if(option === 3){
        console.clear
        console.log("==================")
        console.log("Sistema da opcao 3")
        console.log("==================")
    }
    else{
        console.clear
        console.log("==============")
        console.log("opcao invalida")
        console.log("==============")
    }
}