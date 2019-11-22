
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
    // eslint-disable-next-line no-shadow
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
// this function will gives a new list of numbers from the list was given and give the cumulative list
// for the fist list.
function cumulativeSum(x) {
  const total = [];
  // This loop will go through the list and count the elements we have
  for (let i = 0; i < x.length; i++) {
    // console.log(i);
    // This will take the number we found and push them to the array
    if (i === 0) total.push(x[i]); else {
      // console.log(x[i]);
      let sum = 0;
      // This loop will through the elements and sum elements
      for (let n = i; n >= 0; n--) sum += x[n];
      // console.log(sum);
      total.push(sum);
    }
  }

  return total;
}
// eslint-disable-next-line no-useless-concat
console.log(`${'cumulativeSum => ' + '['}${cumulativeSum([1, 2, 3, 4])}]`);
// This function goes through the elements of the primes numbers and sum them
// eslint-disable-next-line camelcase
function sumoF_Primes(num1) {
  let sum = 0;

  for (let i = 0; i < num1.length; i++) sum += num1[i];

  return sum;
}
// This function goes through the elements and make sure they are primes numbers
function isPrime(num) {
  for (let j = 2; j * j <= num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return num > 1;
}
// This function will find all the longest sum of consecutive primes that adds to a prime below n number
function maxPrimeSum(n) {
  const List = PrimeGen(n);

  let nMax = 0;

  let lenMax = 0;

  let temp;

  let array = [];

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      array = List.slice(i, j);

      temp = sumoF_Primes(array);

      if (nMax < temp) {
        if (isPrime(temp) !== false) {
          if (temp < n) {
            if (array.length > lenMax) {
              lenMax = array.length;

              nMax = temp;
            }
          }
        }
      }
    }
  }

  return [nMax, lenMax];
}

// eslint-disable-next-line no-useless-concat
console.log(`${'maxPrimeSum => ' + '['}${maxPrimeSum(100)}]`);
// eslint-disable-next-line no-useless-concat
console.log(`${'maxPrimeSum => ' + '['}${maxPrimeSum(1000)}]`);
