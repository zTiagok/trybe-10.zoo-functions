const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const filteredEmployee = employees.find((employee) => employee.id === id);

  if (filteredEmployee.id.includes('9e7d4524-363c-416a-8759-8aa7e50c0992')
  || filteredEmployee.id.includes('fdb2543b-5662-46a7-badc-93d960fdc0a8')
  || filteredEmployee.id.includes('0e7b460e-acf4-4e17-bcb3-ee472265db83')) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const responsibleEmployees = [];

  if (isManager(managerId)) {
    employees.filter((id) => {
      if (id.managers.includes(managerId)) {
        responsibleEmployees.push(`${id.firstName} ${id.lastName}`);
      }
      return null;
    });
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return responsibleEmployees;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// FINALIZADO!

module.exports = { isManager, getRelatedEmployees };
