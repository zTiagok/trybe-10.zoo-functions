const data = require('../data/zoo_data');

const { species, hours } = data;

const targetExhibition = (target) => species.find((specie) => specie.name === target).availability;

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

  weekDays.map((day) => {
    if (day === 'Monday') {
      filteredWeek[day] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    } else if (day !== 'Monday') {
      filteredWeek[day] = { officeHour: `Open from ${hours[day]
        .open}am until ${hours[day].close}pm`,
      exhibition: retrieveAnimals(day) };
    }
  });

  return filteredWeek;
};

const checkIf = (target) => {
  const animals = ['lions', 'otters', 'elephants', 'snakes', 'frogs',
    'bears', 'tigers', 'girrafes', 'penguins'];
  const days = Object.keys(hours);

  if (target === undefined) {
    return true;
  }
  return animals.some((animal) => {
    return days.some((day) => {
      if (target === day) {
        return true;
      }
      if (target === animal) {
        return true;
      }
      return false;
    });
  });
};

// MAIN ------------------------------------------------------
function getSchedule(scheduleTarget) {
  if (!checkIf(scheduleTarget) || scheduleTarget === undefined) {
    return retrieveDaysHours();
  }
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (scheduleTarget) {
    return targetExhibition(scheduleTarget);
  }
}

console.log(getSchedule("Monday"))

module.exports = getSchedule;
