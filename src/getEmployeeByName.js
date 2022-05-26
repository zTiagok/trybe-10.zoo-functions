const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  return employees.find((employee) => {
    if (employee.firstName === employeeName) {
      return employee.firstName;
    } if (employee.lastName === employeeName) {
      return employee.lastName;
    }

    return null;
  });
}

// FINALIZADO!

module.exports = getEmployeeByName;
