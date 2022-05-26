const data = require('../data/zoo_data');

const { species } = data;

const retrieveAllAnimals = () => {
  const animalCounter = {};
  const animalIndex = ['lions', 'otters', 'elephants',
    'tigers', 'snakes', 'frogs', 'bears', 'penguins', 'giraffes'];

  species.forEach((specie) => {
    animalIndex.forEach((animal) => {
      if (animal === specie.name) {
        animalCounter[animal] = specie.residents.length;
      }
    });
  });

  return animalCounter;
};

const retrieveSpecie = (name) => {
  let animalCounter = 0;

  species.forEach((specie) => {
    if (specie.name === name.specie) {
      animalCounter = specie.residents.length;
    }
  });

  return animalCounter;
};

const retrieveSpecieAndSex = (name) => {
  let sexCounter = 0;

  species.forEach((specie) => {
    if (specie.name === name.specie) {
      specie.residents.filter((resident) => {
        if (resident.sex === name.sex) {
          sexCounter += 1;
        }
        return null;
      });
    }
  });

  return sexCounter;
};

function countAnimals(animal) {
  if (!animal) {
    return retrieveAllAnimals();
  }
  if (animal.specie && !animal.sex) {
    return retrieveSpecie(animal);
  }
  if (animal.sex) {
    return retrieveSpecieAndSex(animal);
  }
}

module.exports = countAnimals;
