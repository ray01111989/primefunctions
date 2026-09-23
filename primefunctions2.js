// Rawad Bader
// CS320
// Prime functions, fast version. testsuite2.html runs the performance tests against this file.
// (primefunctions.js is the simple version that testsuite1.html checks for correctness.)

// Returns true when i is a prime number.
// Only odd divisors up to the square root of i can be factors, so this stays fast for large numbers.
function isPrime(i) {
  if (i < 2) return false; // 0, 1, and negative numbers are not prime
  if (i === 2) return true; // 2 is the only even prime
  if (i % 2 === 0) return false; // every other even number has 2 as a factor
  for (let x = 3; x * x <= i; x += 2) if (i % x === 0) return false;
  return true;
}

// Returns every prime number from 2 up to limit, using the Sieve of Eratosthenes.
// bool[k] stands for the number k + 2, and starts out true ("might be prime").
function primeGen(limit) {
  const bool = [];
  const primes = [];
  // Start by assuming every number from 2 to limit is prime
  for (let i = 1; i < limit; i++) {
    bool.push(true);
  }
  // For each number still marked prime, cross out all of its multiples
  for (let i = 2; i < limit; i++) {
    if (bool[i - 2]) {
      for (let j = i * 2; j <= limit; j += i) {
        bool[j - 2] = false;
      }
    }
  }
  // Whatever is still marked true is prime; convert the index back to the number
  for (let p = 0; p < bool.length; p++) {
    if (bool[p]) {
      primes.push(p + 2);
    }
  }
  return (primes);
}

// Returns the running totals of a list: [1, 2, 3, 4] => [1, 3, 6, 10]
function cumulativeSum(Y) {
  const total = [];
  for (let i = 0; i < Y.length; i++) {
    if (i === 0) total.push(Y[i]); else {
      let sum = 0;
      // Add up every element from position i back to the start
      for (let n = i; n >= 0; n--) sum += Y[n];
      total.push(sum);
    }
  }
  return total;
}

console.log(`cumulativeSum => [${cumulativeSum([1, 2, 3, 4])}]`);

// Finds the prime (at most n) that can be written as the sum of the longest run of consecutive primes.
// Returns [thatPrime, howManyPrimesWereAdded].
function maxPrimeSum(n) {
  const List = primeGen(n); // all primes up to n
  let count = 0; // length (minus one) of the longest run found so far
  let sum = 0; // the prime that run adds up to
  let minus = 0; // length (minus one) of the run being tried
  const listLen = List.length;
  for (let i = 0; i < listLen; i++) { // i = where a run starts
    let tmp = 0;
    for (let j = i; j < listLen; j++) { // j = where the run currently ends
      tmp += List[j];
      if (tmp <= n) {
        minus = j - i;
        // Keep this run if it is longer than the best so far and its sum is prime
        if ((minus > count && isPrime(tmp) && tmp > sum)) {
          count = j - i;
          sum = tmp;
        }
      } else { // the sum passed n, and longer runs from this start only get bigger, so stop
        break;
      }
    }
  }
  return [sum, ++count];
}
console.log(`maxPrimeSum => [${maxPrimeSum(100)}]`);
console.log(`maxPrimeSum => [${maxPrimeSum(1000)}]`);
