const data = require('../data/zoo_data');

const { species } = data;

const actual = ['baa6e93a-f295-44e7-8f70-2bcdc6f6948d', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'];

const getSpeciesByIds = (...idToSearch) => {
  const result = [];

  species.forEach((element) => idToSearch.forEach((id) => {
    if (element.id === id) {
      result.push(element);
    }
  }));

  return result;
};

console.log(getSpeciesByIds(...actual));

module.exports = getSpeciesByIds;
