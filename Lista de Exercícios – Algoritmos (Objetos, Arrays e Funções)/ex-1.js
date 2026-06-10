let aluno = {
    nome: "Kaik",
    idade: 20,
    curso: "Análise e Desenvolvimento de Sistemas"
};

function apresentarAluno(aluno) {
    return `Olá, meu nome é ${aluno.nome}, tenho ${aluno.idade} anos e curso ${aluno.curso}.`;
}

console.log(apresentarAluno(aluno));