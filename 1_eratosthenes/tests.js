function EqualArrays(expected, actual)
{
    assert.equal(expected.length, actual.length);
    for(var i = 0; i < expected.length; ++i){
        assert.equal(expected[i], actual[i]);
    }    
}

describe("Find primes with EratosthenesSieve", function() { 
    it("2", function() {
        EqualArrays([2], EratosthenesSieve(2));
    });

    it("3", function() {
        EqualArrays([2, 3], EratosthenesSieve(3));
    });

    it("4", function() {
        EqualArrays([2, 3], EratosthenesSieve(4));
    });

    it("5", function() {
        EqualArrays([2, 3, 5], EratosthenesSieve(5));
    });

    it("6", function() {
        EqualArrays([2, 3, 5], EratosthenesSieve(6));
    });

    it("7", function() {
        EqualArrays([2, 3, 5, 7], EratosthenesSieve(7));
    });

    it("8", function() {
        EqualArrays([2, 3, 5, 7], EratosthenesSieve(8));
    });

    it("9", function() {
        EqualArrays([2, 3, 5, 7], EratosthenesSieve(9));
    });

    it("10", function() {
        EqualArrays([2, 3, 5, 7], EratosthenesSieve(10));
    });

    it("11", function() {
        EqualArrays([2, 3, 5, 7, 11], EratosthenesSieve(11));
    });

    it("12", function() {
        EqualArrays([2, 3, 5, 7, 11], EratosthenesSieve(12));
    });

    it("100", function() {
        EqualArrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], EratosthenesSieve(100));
    });

    it("EratosthenesSieveByIndex. max = 2, index = 0", function() {
        assert.equal(2, EratosthenesSieveByIndex(0, 2));
    });

    it("EratosthenesSieveByIndex. max = 100, index = 5", function() {
        assert.equal(13, EratosthenesSieveByIndex(5, 100));
    });
});