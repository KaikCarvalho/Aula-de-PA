let carrinho = [
    {
        nome: "Mouse",
        quantidade: 2,
        preco: 50
    },
    {
        nome: "Teclado",
        quantidade: 1,
        preco: 120
    },
    {
        nome: "Headset",
        quantidade: 3,
        preco: 80
    }
];

function calcularTotal(carrinho) {
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].quantidade * carrinho[i].preco;
    }

    return total;
}

console.log("Valor total: R$ " + calcularTotal(carrinho));