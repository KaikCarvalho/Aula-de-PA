let conta = {
    agencia: "1234",
    numeroConta: "56789",
    senha: "123456",
    saldo: 1380,
    historico: []
};

function validarAcesso(agencia, numeroConta, senha) {
    return (
        conta.agencia === agencia &&
        conta.numeroConta === numeroConta &&
        conta.senha === senha
    );
}

function exibirSaldo() {
    console.log(`Saldo atual: R$ ${conta.saldo}`);
}

function realizarSaque(valor) {
    if (valor <= 0) {
        console.log("Valor inválido.");
        return;
    }

    if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return;
    }

    if (valor % 10 !== 0) {
        console.log("O valor deve ser múltiplo de 10.");
        return;
    }

    let restante = valor;

    let notas100 = Math.floor(restante / 100);
    restante %= 100;

    let notas50 = Math.floor(restante / 50);
    restante %= 50;

    let notas20 = Math.floor(restante / 20);
    restante %= 20;

    let notas10 = Math.floor(restante / 10);

    conta.saldo -= valor;

    conta.historico.push({
        operacao: "Saque",
        valor: valor
    });

    console.log(`\nSaque realizado: R$ ${valor}`);
    console.log("Cédulas entregues:");

    if (notas100 > 0) console.log(`${notas100} nota(s) de R$100`);
    if (notas50 > 0) console.log(`${notas50} nota(s) de R$50`);
    if (notas20 > 0) console.log(`${notas20} nota(s) de R$20`);
    if (notas10 > 0) console.log(`${notas10} nota(s) de R$10`);

    console.log(`Novo saldo: R$ ${conta.saldo}`);
}

if (validarAcesso("1234", "56789", "123456")) {
    console.log("Acesso autorizado!");

    exibirSaldo();

    realizarSaque(280);

    exibirSaldo();
} else {
    console.log("Agência, conta ou senha inválidos.");
}