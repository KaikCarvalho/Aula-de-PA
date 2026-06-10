let nomes = ["Kaik", "Maria", "João", "Ana", "Carlos"];

function verificarNome(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
            return true;
        }
    }
    return false;
}

console.log(verificarNome("Ana"));   
console.log(verificarNome("Pedro"));  