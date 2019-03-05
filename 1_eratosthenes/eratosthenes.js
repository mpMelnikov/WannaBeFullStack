function EratosthenesSieve(max)
{
    var arr = [];
    var index = 0;
    for (var i = 2; i <= max; ++i)
    {
        arr[index] = i;
        index++;
    }

    arr = FilterElements(arr, 2);

    return arr.filter(function(i) { return i !== 0;});
}

function FilterElements(arr, startFrom)
{
    var startFromIndex = 0;
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] === startFrom)
        {
            startFromIndex = i;
            break;
        }
    }

    var i = startFromIndex;
    while (i + startFrom < arr.length)
    {
        i += startFrom;
        arr[i] = 0;
    }

    var nextStartFrom = startFrom;
    for (i = startFromIndex + 1; i <= arr.length/2; i++)
    {
        if (arr[i] !== 0)
        {
            nextStartFrom = arr[i];
            break;
        }
    }
    if (nextStartFrom === startFrom)
    {
        return arr;
    }

    return FilterElements(arr, nextStartFrom);
}

