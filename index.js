


const crud = require('./pokemons');

console.log("Pokemons iniciais:", crud.readAll());

// CREATE
crud.create("Pikachu");
console.log("Depois de adicionar Pikachu:", crud.readAll());

// READ
console.log("Pokemon na posição 2:", crud.read(2));

// UPDATE
crud.update(1, "Mewtwo");
console.log("Depois de atualizar índice 1:", crud.readAll());

// DELETE
crud.remove(0);
console.log("Depois de remover índice 0:", crud.readAll());

