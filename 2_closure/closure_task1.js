// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

function sum(a)
{
    var total = 0;

    function internalSum(b)
    {
        total += b;
        return internalSum;
    }

    internalSum.toString = function()
    {
        return total;
    }
    
    return internalSum(a);
}

console.log(sum(-12)(3)(5)(2));
console.log(sum(1)(5));
console.log(sum(-12)(3));
