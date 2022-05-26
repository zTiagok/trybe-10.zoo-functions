const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entrantsSum = { child: 0, adult: 0, senior: 0 };
  // seu código aqui

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantsSum.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 49) {
      entrantsSum.adult += 1;
    } else if (entrant.age >= 50) {
      entrantsSum.senior += 1;
    }
  });

  return entrantsSum;
}

function calculateEntry(entrants) {
  if (entrants && Object.keys(entrants).length !== 0) {
    const peopleEntry = countEntrants(entrants);
    const childEntry = peopleEntry.child * prices.child;
    const adultEntry = peopleEntry.adult * prices.adult;
    const seniorEntry = peopleEntry.senior * prices.senior;

    return childEntry + adultEntry + seniorEntry;
  }
  return 0;
}

// FINALIZADO!

module.exports = { calculateEntry, countEntrants };
