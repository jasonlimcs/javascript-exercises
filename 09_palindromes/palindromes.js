const palindromes = function (string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'

    let cleaned_string = string
    .toLowerCase()
    .split('')
    .filter((char) => alphabet.includes(char))
    .join('');

    let reversed_string = cleaned_string.split('').reverse().join('');

    return cleaned_string == reversed_string;

};
console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
