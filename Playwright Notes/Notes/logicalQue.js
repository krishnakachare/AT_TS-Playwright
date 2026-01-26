// check prime number:

function isPrime(num) {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // found a divisor, not prime
        }

    }
    return true; // no divisors found, it's prime
}

isPrime(999); // false