const data = require('../data/zoo_data');

// const { species, hours } = data;

function getSchedule(scheduleTarget) {
  // generalSchedule = {};
  // if (scheduleTarget) {
  //   return species.find((specie) => specie.name === scheduleTarget).availability;
  // }
  // generalSchedule.Tuesday = { officeHour: `Open from ${hours.Tuesday.open} until ${hours.Tuesday.close}`,
  //   exbibition: species.filter((specie) => specie.availability.find((day) => day.includes('Tuesday'))) };

  // console.log(generalSchedule);
}

console.log(getSchedule());
module.exports = getSchedule;
