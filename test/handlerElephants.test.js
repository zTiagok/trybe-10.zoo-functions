// const countAnimals = require('../src/countAnimals');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('A função sem parâmetros deve retornar "undefined"', () => {
    const expected = handlerElephants();
    const result = undefined;

    expect(expected).toBe(result);
  });

  it('A função com parâmetro "Count" deve retornar o número inteiro "4"', () => {
    const expected = handlerElephants('count');
    const result = 4;

    expect(expected).toBe(result);
  });

  it('A função com parâmetro "Names" deve retornar um array de names com "Jefferson"', () => {
    const expected = handlerElephants('names');
    const result = 'Jefferson';

    expect(expected).toContain(result);
  });

  it('A função com parâmetro "averageAge" deve retornar o uma idade próxima a "10.5"', () => {
    const expected = handlerElephants('averageAge');
    const result = 10.5;

    expect(expected).toBeCloseTo(result);
  });

  it('O tipo deve retornar uma função', () => {
    const expected = typeof handlerElephants;
    const result = 'function';

    expect(expected).toBe(result);
  });

  it('A função com o parâmetro errado deve retornar null', () => {
    const expected = handlerElephants('param');
    const result = null;

    expect(expected).toBe(result);
  });

  it('A função com o parâmetro não sendo uma string deve retornar um erro', () => {
    const expected = handlerElephants(4);
    const result = 'Parâmetro inválido, é necessário uma string';

    expect(expected).toBe(result);
  });

  it('A função com o um parâmetro pré-definido deverá retorna-lo.', () => {
    const residents = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];

    const expected = handlerElephants('residents');
    const result = residents;
    expect(expected).toStrictEqual(result);
  });
});

// FINALIZADO!
