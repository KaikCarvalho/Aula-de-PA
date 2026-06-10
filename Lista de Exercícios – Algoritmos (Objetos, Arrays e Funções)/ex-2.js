let produtos = [
    { nome: "Mouse", preco: 30 },
    { nome: "Teclado", preco: 80 },
    { nome: "Monitor", preco: 600 },
    { nome: "Pendrive", preco: 45 },
    { nome: "Headset", preco: 120 }
];

function filtrarProdutos(produtos) {
    return produtos.filter(produto => produto.preco > 50);
}

console.log(filtrarProdutos(produtos));