let pessoas = [
    { nome: "Kaik", idade: 20 },
    { nome: "Maria", idade: 17 },
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 16 },
    { nome: "Carlos", idade: 30 }
];

function filtrarMaioresDeIdade(pessoas) {
    let maiores = [];

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            maiores.push(pessoas[i]);
        }
    }

    return maiores;
}

console.log(filtrarMaioresDeIdade(pessoas));