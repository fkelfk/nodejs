const {odd, even} = require('./var');

function checkOddoOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddoOrEven;