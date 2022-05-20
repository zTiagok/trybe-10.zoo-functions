const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {

  let foundAnimal = species.find((specie) => {
    return specie.name === animal
  });

  let residents = foundAnimal.residents
  
  return residents.every((resident) => {
    return age < resident.age;
  });
}

getAnimalsOlderThan('lions', 10)

module.exports = getAnimalsOlderThan;
