const { CariTandaBilangan } = require('../logic');

test('Angka negatif', () => {
    expect(CariTandaBilangan(-5)).toBe('Negatif');
});

test('Angka positif', () => {
    expect(CariTandaBilangan(7)).toBe('Positif');
});

test('Angka nol', () => {
    expect(CariTandaBilangan(0)).toBe('Nol');
});
