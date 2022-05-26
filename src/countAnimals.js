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
// function countAnimals(animal) {
//   let animalsCounter = {};
//   let sexCounter = 0;
//   const animalsIndex = ['lions', 'otters', 'elephants', 'tigers', 'snakes', 'frogs', 'bears', 'penguins', 'giraffes'];

//   if (!animal) {
//     species.forEach((specie) => {
//       animalsIndex.forEach((index) => {
//         if (index === specie.name) {
//           animalsCounter[index] = specie.residents.length;
//         }
//       });
//     });
//   } else if (animal.specie && !animal.sex) {
//     species.forEach((specie) => {
//       if (specie.name === animal.specie) {
//         animalsCounter = specie.residents.length;
//       }
//     });
//   } else if (animal.specie && animal.sex) {
//     species.forEach((specie) => {
//       if (specie.name === animal.specie) {
//         specie.residents.filter((resident) => {
//           if (resident.sex === animal.sex) {
//             sexCounter += 1;
//           }
//           animalsCounter = sexCounter;
//         });
//       }
//     });
//   }

//   return animalsCounter;
// }

module.exports = countAnimals;
