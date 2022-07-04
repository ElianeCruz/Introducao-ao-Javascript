const lista = [
    {
        produto: 'Sabão',
        preco: 10,
    },
    {
        produto: 'Água',
        preco: 3,
    },
    {
        produto: 'Hidratante',
        preco: 35,
    },
    {
        produto: 'Sabonete',
        preco: 4,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (previous, current, index) {
        console.log('rodada', index + 1);
        console.log(previous);
        console.log(current);
        return previous - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));