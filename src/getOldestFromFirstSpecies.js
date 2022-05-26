const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  let oldestAge = 0;
  let arrayWithResidents;
  const findEmployee = employees.find((employee) => employee.id === id);
  const firstAnimal = findEmployee.responsibleFor[0];
  species.find((specie) => {
    if (specie.id === firstAnimal) {
      return specie;
    }
    return null;
  }).residents.forEach((resident) => {
    if (resident.age > oldestAge) {
      oldestAge = resident.age;
      arrayWithResidents = Object.values(resident);
    }
  });

  return arrayWithResidents;
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
