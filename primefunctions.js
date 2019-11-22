
/* Nmae: Rawad Bader
   Class: CS 320
   This code will take a number and find the primes numbers in the number, and it can fund the
   cumulative numbers of the primes we found then it search for the heights number of primes numbers
   that can be add to the same primes number we found.
 */
// This is the first function to find the primes number from a number was given.
function PrimeGen(n) {
  const primes = [];
  // This loop through the numbers until it reach the n numbers we have

  for (let i = 2; i < n; i++) {
    let isPrime = false;
    // this loop will make sure if the numbers we have is primes
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = true;
      }
    }
    // This if will push the numbers to the array when we find them.
    if (isPrime === false) {
      primes.push(i);
      // console.log(i);
    }
  }
  return primes;
}
// eslint-disable-next-line no-useless-concat
console.log(`${'PrimeGen => ' + '['}${PrimeGen(10)}]`);
