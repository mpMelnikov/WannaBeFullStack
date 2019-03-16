// https://learn.javascript.ru/task/calculator-extendable

"use strict"

function Calculator()
{
    this.operations = {};

    this.addMethod = function(code, method)
    {
        this.operations[code] = method;
    }

    this.calculate = function(expression)
    {
        var splitted = split(expression);
        if (splitted.length !== 3) throwError();
        var operation = splitted[1];
        var operand1 = getOperand(splitted[0]);
        var operand2 = getOperand(splitted[2]);
        var operationFunc = this.findOperation(operation);

        return operationFunc(operand1, operand2);
    }

    function throwError()
    {
        throw new Error('Invalid expression!');
    }

    function split(expression)
    {
        return expression.split(/\s+/);
    }

    function getOperand(string)
    {
        var result = +string;
        if (result !== result)
            throwError();
        
        return result;
    }

    this.findOperation = function (operation)
    {
        if (!this.operations.hasOwnProperty(operation))
            throwError();

        return this.operations[operation];
    }

    this.addMethod("+", function(x, y) {return x + y;})
    this.addMethod("-", function(x, y) {return x - y;})
}

var calc = new Calculator();
calc.addMethod("*", function(x, y) {return x * y;})

console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") ); // -4
console.log( calc.calculate("3 * 7") ); // 21