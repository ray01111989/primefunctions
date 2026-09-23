# Prime Functions

JavaScript functions for working with prime numbers, written for CS 320. Includes correctness tests and a performance comparison of two implementations.

## Functions (`primefunctions.js`)

| Function | What it does |
|---|---|
| `PrimeGen(n)` | Returns all primes below `n` |
| `cumulativeSum(list)` | Returns the running totals of a list, e.g. `[1, 2, 3, 4]` becomes `[1, 3, 6, 10]` |
| `sumOfPrimes(list)` | Adds up all numbers in a list |
| `isPrime(num)` | Checks whether a single number is prime |
| `maxPrimeSum(n)` | Finds the prime below `n` that is the sum of the **longest run of consecutive primes**, returned as `[prime, runLength]` |

`primefunctions2.js` is a second version of the implementation, used for the performance comparison.

## Run

With Node.js, running the file prints example results to the console:

```bash
git clone https://github.com/ray01111989/primefunctions.git
cd primefunctions
node primefunctions.js
```

Or open `index.html` in a browser and check the developer console.

## Tests

| File | Purpose |
|---|---|
| `testCorrectness.js` | Checks that the functions return the expected results |
| `testPerformance.js` | Times the implementations against each other |
| `testsuite1.html`, `testsuite2.html` | Browser test pages for each implementation |

## Code style

The project uses ESLint (`.eslintrc`) and the course code-style file (`cs320-se-code-style.xml`).

## Course

CS 320, by Rawad Bader.
