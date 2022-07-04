const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Olivia',
        nota: 7,
        turma: '1B'
    },
    {
        nome: 'Iris',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '1B'
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        // sem object destrutiring   
        // if(arr[i].nota >= media) {
        //     aprovados.push{arr[i].nome}
        //    }

        // com object destruturing
        const { nota, nome } = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        } const aluno

    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));