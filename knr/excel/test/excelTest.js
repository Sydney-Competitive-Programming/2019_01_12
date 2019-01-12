const assert = require('assert');
const excel = require('../excel');

describe('convert()', function () {
    it('should return correct coordinate', function () {
        //Given
        const given = "a1";
        const expected = [0, 0];
        //When
        const actual = excel.convert(given);
        assert.deepEqual(actual, expected);
    });
    it('should return correct coordinate for 2 letters', function () {
        //Given
        const given = "aa10";
        const expected = [9, 26];
        //When
        const actual = excel.convert(given);
        assert.deepEqual(actual, expected);
    });
    it('should return integers from value', function () {
        //Given
        const given = "aa10";
        const expected = [10];
        //When
        const actual = excel.getIntegers(given);
        assert.deepEqual(actual, expected);
    });
    it('should return letters from value', function () {
        //Given
        const given = "aa10";
        const expected = ['a', 'a'];
        //When
        const actual = excel.getLetters(given);
        assert.deepEqual(actual, expected);
    });
});
