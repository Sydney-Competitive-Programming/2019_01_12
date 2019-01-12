function convert(value) {
    const ALPHABET_SIZE = 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const splitValue = value.split('');
    const letters = getLetters(value);
    const number = getIntegers(value)[0] - 1;
    if(letters.length === 1){
        const output = [];
        const letterIndex = alphabet.indexOf(splitValue[0]);
        output[0] = number;
        output[1] = letterIndex;
        return output
    } else {
        const output = [];
        const letterIndex = alphabet.indexOf(splitValue[0]) + ALPHABET_SIZE;
        output[0] = number;
        output[1] = letterIndex;
        return output
    }
}

function getIntegers(value) {
    return value.match(/\d+/g)
}

function getLetters(value) {
    return value.match(/[a-zA-Z]+/g)[0].split('');
}

module.exports = {
    convert,
    getIntegers,
    getLetters
};