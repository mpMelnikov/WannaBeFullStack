// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

function sum(a)
{
    return function internalSum(b)
    {
        return a + b;
    }
}

console.log(sum(1)(5))
console.log(sum(-12)(3))