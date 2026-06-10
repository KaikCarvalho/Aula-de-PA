let elementos = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

function contarElementos(array) {
    let contagem = {};

    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];

        if (contagem[elemento]) {
            contagem[elemento]++;
        } else {
            contagem[elemento] = 1;
        }
    }

    return contagem;
}

console.log(contarElementos(elementos));