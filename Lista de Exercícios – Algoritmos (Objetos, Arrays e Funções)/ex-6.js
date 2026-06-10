let livros = [
    {
        titulo: "JavaScript Moderno",
        autor: "João Silva",
        ano: 2015
    },
    {
        titulo: "Algoritmos e Lógica",
        autor: "Maria Souza",
        ano: 2008
    },
    {
        titulo: "Node.js na Prática",
        autor: "Carlos Lima",
        ano: 2020
    },
    {
        titulo: "Banco de Dados",
        autor: "Ana Costa",
        ano: 2010
    }
];

function filtrarLivros(livros) {
    let resultado = [];

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].ano > 2010) {
            resultado.push(livros[i]);
        }
    }

    return resultado;
}

console.log(filtrarLivros(livros));