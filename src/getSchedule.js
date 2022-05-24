const data = require('../data/zoo_data');

const { species, hours } = data;

function getSchedule(scheduleTarget) {
  generalSchedule = {}
  if (scheduleTarget) {
    return species.find((specie) => {
      return specie.name === scheduleTarget
    }).availability
  } else {
    generalSchedule.Tuesday = {officeHour: `Open from ${hours.Tuesday.open} until ${hours.Tuesday.close}`,
exbibition: species.filter((specie) => {
  return specie.availability.find((day) => {
    return day.includes('Tuesday')
  })
 })}

  }

  console.log(generalSchedule)
}

console.log(getSchedule())
module.exports = getSchedule;
