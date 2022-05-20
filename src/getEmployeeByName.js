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
      } else if (employee.lastName === employeeName) {
        return employee.lastName;
      }
    }
  )
}

getEmployeeByName('Wishart')


module.exports = getEmployeeByName;
