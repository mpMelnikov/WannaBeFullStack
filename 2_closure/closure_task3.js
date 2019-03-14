/*
Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
*/

function makeBuffer() { 
    var buffer = "";

    var add = function (str)
    {
        if (typeof str === 'undefined')
        {
            return buffer;
        }

        buffer += str;
    }

    add.clear = function ()
    {
        buffer = "";
    }

    return add;
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log( buffer() );

buffer.clear();
console.log( buffer() );