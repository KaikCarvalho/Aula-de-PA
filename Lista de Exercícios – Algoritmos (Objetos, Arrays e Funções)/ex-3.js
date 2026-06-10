let notas = [8, 7, 9, 6, 10];

function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}

console.log("Média final:", calcularMedia(notas));