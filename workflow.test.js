
const { convertAgeToBuddhistEra, convertGradeToRank } = require('./workflow');

describe('Team B Workflow', () => {
    test('convertAgeToBuddhistEra should correctly convert age to Buddhist Era', () => {
        expect(convertAgeToBuddhistEra(20)).toBe(2547);
    });

    test('convertGradeToRank should correctly convert grade to rank', () => {
        expect(convertGradeToRank('B+')).toBe('Distinction');
        expect(convertGradeToRank('B')).toBe('Distinction');
        expect(convertGradeToRank('A')).toBe('High Distinction');
        expect(convertGradeToRank('C+')).toBe('Good');
        expect(convertGradeToRank('C')).toBe('Good');
        expect(convertGradeToRank('D')).toBe('Normal');
        expect(convertGradeToRank('D+')).toBe('Normal');
        expect(convertGradeToRank('F')).toBe("Failed");
    });

    test('convertGradeToRank should return "Unknown" for invalid grade', () => {
        expect(convertGradeToRank('Z')).toBe('Unknown');
    });
});
