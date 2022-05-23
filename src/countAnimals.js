const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  let animalsCounter = {}
  let sexCounter = 0;
  let animalsIndex = ['lions', 'otters', 'elephants', 'tigers', 'snakes', 'frogs', 'bears', 'penguins', 'giraffes']

  if (!animal) {
    species.forEach((specie) => {
      animalsIndex.forEach((index) => {
        if (index === specie.name) {
          animalsCounter[index] = specie.residents.length
        }
      })
    })
  } else if (animal.specie && !animal.sex) {
    species.forEach((specie) => {
      if (specie.name === animal.specie) {
        animalsCounter = specie.residents.length
      }
    })
  } else if (animal.specie && animal.sex) {
    species.forEach((specie) => {
      if (specie.name === animal.specie) {
        specie.residents.filter((resident) => {
          if (resident.sex === animal.sex) {
            sexCounter += 1
          }
          animalsCounter = sexCounter;
        })
      }
    })
  }

  return animalsCounter;
}

console.log(countAnimals({ specie: 'bears', sex: 'male' }))
module.exports = countAnimals;
