
let pokemons = ['Arceus', 'Giratina', 'Raikou', 'Rayquaza', 'Charizard'];

// Create
function create(name) {
  pokemons.push(name);
  return pokemons;
}

// Read
function readAll() {
  return pokemons;
}

function read(index) {
  return pokemons[index] || null;
}

// Update
function update(index, newName) {
  if (pokemons[index]) {
    const old = pokemons[index];
    pokemons[index] = newName;
    return { old, newName };
  }
  return null;
}

// Delete
function remove(index) {
  if (pokemons[index]) {
    const deleted = pokemons.splice(index, 1);
    return deleted[0];
  }
  return null;
}


module.exports = { create, readAll, read, update, remove };

