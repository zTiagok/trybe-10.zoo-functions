const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('A função deve retornar os parâmetros', () => {
    const expected = getOpeningHours();
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(expected).toStrictEqual(result);
  });

  it('A função com parâmetros errados deve retornar um erro', () => {
    expect(() => getOpeningHours('mondayud')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('A função com data e hora errada deve retornar um erro', () => {
    expect(() => getOpeningHours('tuesday', '10:10:30')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('A função com hora errada deve retornar um erro', () => {
    expect(() => getOpeningHours('tuesday', '10:10PM')).toThrow(/^The minutes should represent a number$/);
  });

  it('A função com parâmetro de Tuesday 10:10-PM deve retornar o zoológico como fechado', () => {
    const expected = getOpeningHours('tuesday', '10:10-PM');
    const result = 'The zoo is closed';

    expect(expected).toBe(result);
  });

  it('A função com parâmetro de Monday 10:10-AM deve retornar o zoológico como fechado', () => {
    const expected = getOpeningHours('monday', '10:10-AM');
    const result = 'The zoo is closed';

    expect(expected).toBe(result);
  });

  it('A função com parâmetro de Tuesday 08:00-AM deve retornar o zoológico como aberto', () => {
    const expected = getOpeningHours('tuesday', '08:00-AM');
    const result = 'The zoo is open';

    expect(expected).toBe(result);
  });

  it('A função com parâmetro de Monday 99:00-AM deve retornar um erro', () => {
    expect(() => getOpeningHours('monday', '99:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('A função com parâmetro de Monday Tuesday deve retornar um erro', () => {
    expect(() => getOpeningHours('monday', 'Tuesday')).toThrow(/^The hour should represent a number$/);
  });

  it('A função com parâmetro de Monday 10:101-PM deve retornar um erro', () => {
    expect(() => getOpeningHours('monday', '10:101-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
