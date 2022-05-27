const data = require('../data/zoo_data');

const { species, hours } = data;

const targetExhibition = (target) => {
  return species.find((specie) => {
    return specie.name === target;
  }).availability;
};

const retrieveAnimals = (day) => {
  const animalArray = [];

  species.forEach((specie) => {
    specie.availability.filter((available) => {
      if (available === day) {
        animalArray.push(specie.name);
      }
    });
  });

  return animalArray;
};

const retrieveDaysHours = () => {
  const weekDays = Object.keys(hours);
  const filteredWeek = {};

  weekDays.map((day, index) => {
    if (index === 6) {
      filteredWeek[day] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
    filteredWeek[day] = { officeHour: `Open from ${hours[day]
      .open}am until ${hours[day].close}pm`,
    exhibition: retrieveAnimals(day) };
  });

  return filteredWeek;
};

// MAIN ------------------------------------------------------
function getSchedule(scheduleTarget) {
  if (scheduleTarget) {
    return targetExhibition(scheduleTarget);
  } if (scheduleTarget === undefined) {
    return retrieveDaysHours();
  }

}

console.log(retrieveDaysHours());

// console.log(getSchedule('lions'));
module.exports = getSchedule;
