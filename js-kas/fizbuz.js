let numValue = 15; // numValue
function fizBuz(num1) {
    if (num1%3 == 0 && num1%5 == 0 ) return 'fizbuz'
    if (num1%3 == 0 && num1%5 != 0 ) return 'fiz'
    if (num1%3 != 0 && num1%5 == 0 ) return 'buz'
    if (num1%3 != 0 && num1%5 != 0 ) return num1
}; console.log(fizBuz(numValue))