let jogadores = [
    { nome: "Kaik", pontos: 150 },
    { nome: "Maria", pontos: 300 },
    { nome: "João", pontos: 200 },
    { nome: "Ana", pontos: 450 },
    { nome: "Carlos", pontos: 100 }
];

function ordenarJogadores(jogadores) {
    for (let i = 0; i < jogadores.length - 1; i++) {
        for (let j = 0; j < jogadores.length - 1 - i; j++) {
            if (jogadores[j].pontos < jogadores[j + 1].pontos) {
                let temp = jogadores[j];
                jogadores[j] = jogadores[j + 1];
                jogadores[j + 1] = temp;
            }
        }
    }

    return jogadores;
}

console.log(ordenarJogadores(jogadores));