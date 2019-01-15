// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num == 2) {
        return true;
    } else if (num > 1) {
        for (let i = 2; i < num; i++){
            if (num % i !== 0) {
                return true;
            } else if (num === i * 1) {
                return false
            } else {
                return false
            }
            }
        }
    }
