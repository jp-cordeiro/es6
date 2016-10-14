//Valor padrão no ES5
function testES5(valueA) {
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
    return valueA + valueB;
}

console.log(testES5(1));

//Valor padrão no ES6
function testES6(valueA,valueB = 4) {
    return valueA + valueB;
}
console.log(testES6(3));
