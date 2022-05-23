const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let filteredEmployee;
  let response;

  filteredEmployee = employees.find((employee) => {
    return employee.id === id;
  });

  if (filteredEmployee.id.includes('9e7d4524-363c-416a-8759-8aa7e50c0992') || 
  filteredEmployee.id.includes('fdb2543b-5662-46a7-badc-93d960fdc0a8') || 
  filteredEmployee.id.includes('0e7b460e-acf4-4e17-bcb3-ee472265db83')) {
    return true;
  } else {
    return false;
  }

}

function getRelatedEmployees(managerId) {
  let responsibleEmployees = []

  if (isManager(managerId)) {
    employees.filter((id) => {
      if (id.managers.includes(managerId)) {
        responsibleEmployees.push(`${id.firstName} ${id.lastName}`)
      }
    })
  } else {
    throw new Error(`O id inserido não é de uma pessoa colaboradora gerente!`)
  }

  return responsibleEmployees;
  // throw new Error(`O id inserido não é de uma pessoa colaboradora gerente!`)
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))
// 9e7d4524-363c-416a-8759-8aa7e50c0992 GERENTE
// c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1 NÃO GERENTE
// fdb2543b-5662-46a7-badc-93d960fdc0a8 GERENTE

module.exports = { isManager, getRelatedEmployees };
