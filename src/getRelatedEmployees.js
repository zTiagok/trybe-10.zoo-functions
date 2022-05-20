const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let searchEmployee = [];
  
  employees.find((employee) => {
    if (employee.id === id) {
     searchEmployee.push(employee);
    }
  });

  return searchEmployee.some((search) => {
    return search.managers[0] !== ""
  })
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')
// 9e7d4524-363c-416a-8759-8aa7e50c0992 GERENTE
// c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1 NÃO GERENTE

module.exports = { isManager, getRelatedEmployees };
