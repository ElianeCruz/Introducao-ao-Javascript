function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 40,
};

const pessoa3 = {
    nome: 'Robson',
    idade: 23,
};

const animal = {
    nome: 'Kiara',
    idade: 8,
    raca: 'Rotweiller',
};

//console.log(calculaIdade.call(pessoa3, 3));
console.log(calculaIdade.apply(pessoa2, [8]))