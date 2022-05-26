const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const foundAnimal = species.find((specie) => specie.name === animal);

  const { residents } = foundAnimal;

  return residents.every((resident) => age < resident.age);
}

// FINALIZADO!

getAnimalsOlderThan('lions', 10);

module.exports = getAnimalsOlderThan;
