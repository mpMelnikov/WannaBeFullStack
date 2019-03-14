/*
В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:

Добавить значение в буфер.
Получить текущее содержимое.

function makeBuffer() { 
//    ваш код  
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

*/

function makeBuffer() { 
    var buffer = "";

    return function add(str)
    {
        if (typeof str === 'undefined')
        {
            return buffer;
        }

        buffer += str;
    }
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log( buffer() );