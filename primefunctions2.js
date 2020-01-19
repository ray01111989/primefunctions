// Rawad Bader
// CS320
// prime functions

function isPrime(i) {
  for (let x = 3; x < i; x += 2) if (i % x === 0) return false;
  return i > 1;
}
function primeGen(limit) {
  const bool = [];
  const primes = [];
  for (let i = 1; i < limit; i++) {
    bool.push(true);
  }
  for (let i = 2; i < limit; i++) {
    if (bool[i - 2]) {
      for (let j = i * 2; j <= limit; j += i) {
        bool[j - 2] = false;
      }
    }
  }
  for (let p = 0; p < bool.length; p++) {
    if (bool[p]) {
      primes.push(p + 2);
    }
  }
  return (primes);
}
function cumulativeSum(Y) {
  const total = [];
  for (let i = 0; i < Y.length; i++) {
    if (i === 0) total.push(Y[i]); else {
      let sum = 0;
      for (let n = i; n >= 0; n--) sum += Y[n];
      total.push(sum);
    }
  }
  return total;
}

console.log(`cumulativeSum => [${cumulativeSum([1, 2, 3, 4])}]`);
function maxPrimeSum(n) { // this will display the total sum and how many prime number were sumed
  const List = primeGen(n); // calls my primeGen function
  let count = 0;
  let sum = 0;
  let minus = 0;
  const listLen = List.length;
  for (let i = 0; i < listLen; i++) { // starts the array
    let tmp = 0;
    for (let j = i; j < listLen; j++) { // this will increment the array
      tmp += List[j];
      if (tmp <= n) {
        minus = j - i;
        if ((minus > count && isPrime(tmp) && tmp > sum)) {
          count = j - i;
          sum = tmp;
        }
      } else { // will check if the amount of numbers is bigger than the input and will stop
        break;
      }
    }
  }
  return [sum, ++count];
}
console.log(`maxPrimeSum => [${maxPrimeSum(100)}]`);
console.log(`maxPrimeSum => [${maxPrimeSum(1000)}]`);
