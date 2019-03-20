function isPrime(endNum) {
    let array = []
    for (let i = 2; i <= endNum; i++) {
        array.push(i)
    }
    checkPrime(array)
}

function checkPrime(range) {
    let primes = [];
    while (range.length > 0) {
        let prime = range.shift()
        primes.push(prime)

        range = range.filter(function (num) {
            return num % prime !== 0
        })
    }
    console.log(primes)
}

isPrime(30)