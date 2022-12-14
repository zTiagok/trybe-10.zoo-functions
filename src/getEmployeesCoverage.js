const data = require('../data/zoo_data');

const { employees, species } = data;

// PEGA AS INFORMAÇÕES DO FUNCIONÁRIO CASO SEJA PASSADO O NOME, SOBRENOME OU ID
const getEmployeeInfo = (searchEmployee) => employees.find((employee) => {
  if (employee.firstName === searchEmployee.name || employee
    .lastName === searchEmployee.name || employee.id === searchEmployee.id) {
    return employee;
  } if (employee.id === searchEmployee) {
    return employee;
  }
  return undefined;
});

// PEGA AS INFORMAÇÕES DO ANIMAL AO PASSAR SEU ID
const getAnimalInfo = (searchAnimal) => species.find((specie) => specie.id === searchAnimal);

// GERA UM OBJETO COM AS INFORMAÇÕES DO EMPREGADO PESQUISADO
const personIndex = (nameOrId) => {
  const index = {
    id: getEmployeeInfo(nameOrId).id,
    fullName: `${getEmployeeInfo(nameOrId).firstName} ${getEmployeeInfo(nameOrId).lastName}`,
    species: [],
    locations: [],
  };

  // DÁ PUSH NA SPECIE CONTIDA DENTRO DO INDEX
  getEmployeeInfo(nameOrId).responsibleFor.forEach((responsible) => {
    index.species.push(getAnimalInfo(responsible).name);
  });

  // DÁ PUSH NA LOCATIONS CONTIDA DENTRO DO INDEX
  getEmployeeInfo(nameOrId).responsibleFor.forEach((responsible) => {
    index.locations.push(getAnimalInfo(responsible).location);
  });

  return index;
};

// CRIA UMA NOVA ARRAY COM O ID DE TODOS OS FUNCIONÁRIOS
const allEmployeesIDs = () => {
  const employeeMap = employees.map((employee) => employee.id);

  return employeeMap.map((map) => (personIndex(map)));
};

// RESOLUÇÃO MESTRE, RETORNANDO FUNÇÕES ANTERIORES CASO SEJA PASSADO UM CERTO PARÂMETRO
function getEmployeesCoverage(nameOrId) {
  if (!nameOrId) {
    return allEmployeesIDs();
  }
  if (getEmployeeInfo(nameOrId) === undefined) {
    throw new Error('Informações inválidas');
  }
  if (nameOrId) {
    return personIndex(nameOrId);
  }
}

// FINALIZADO!

console.log(getEmployeeInfo({ id: 'Id inválido' }));
module.exports = getEmployeesCoverage;
