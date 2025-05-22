const { CariNilaiPangkat } = require('../logic');

describe('CariNilaiPangkat', () => {
    test('should return 1 if b is 0', () => {
        expect(CariNilaiPangkat(0, 0)).toBe(1);
    });

    test('should return -1 if b is negative', () => {
        expect(CariNilaiPangkat(5, -2)).toBe(-1);
    });

    test('should return -2 if b > 10 or a > 100', () => {
        expect(CariNilaiPangkat(5, 11)).toBe(-2);
        expect(CariNilaiPangkat(101, 2)).toBe(-2);
    });

    test('should return -3 if result exceeds MAX_SAFE_INTEGER', () => {
        expect(CariNilaiPangkat(100, 10)).toBe(-3);
    });

    test('should return correct power for normal cases', () => {
        expect(CariNilaiPangkat(2, 5)).toBe(32);
    });
});
