// -------------------------------------------
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => doshit(lines));

function doshit(lines) {
    // console.log(lines)
    let num = Number(lines[0])
    factor(num)

};
// ------------------------------------------

function factor(num, array = [], target = 0) {
    if (array.length == 0) {
        target = num
    }
    let factors = printPrime(num)
    for (let i = 0; i < factors.length; i++) {
        if (num % factors[i] === 0) {
            num = num / factors[i]
            array.push(factors[i])
            factor(num, array, target)
            break
        }
    }
    array.push(num)
    // console.log(array)
    array = array.sort()
    let x = array.reduce(function (sum, element) {
        return sum = sum * element
    }, 1)
    if (x <= target) {
        let solution = array.join("*")
        console.log(solution)
        return solution
    }
}

function printPrime(value) {
    var primes = [];
    let primertn = [];
    for (var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for (var i = 2; i < limit; i++) {
        if (primes[i] === true) {
            for (var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for (var i = 2; i < value; i++) {
        if (primes[i] === true) {
            primertn.push(i)
        }
    }
    return primertn
}

factor(lines)