function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Creison', 'Staff');
usuarios.set('Alecio', 'Arquiteto');
usuarios.set('Luccas', 'Médico');
usuarios.set('Luiza', 'Psicóloga');
usuarios.set('Eliane', 'Admin');

console.log(getAdmins(usuarios));