/* eslint-env mocha, chai */
// eslint-disable-next-line no-unused-vars
/* global chai, primeGen, cumulativeSum, maxPrimeSum */

describe('Test For Correctness', function () {
  describe('PrimeGen', function () {
    it('primeGen(10) => [2, 3, 5, 7]', function () {
      // eslint-disable-next-line no-undef
      chai.expect(PrimeGen(10)).to.have.members([2, 3, 5, 7]);
    });
    it('PrimeGen(20) => [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      // eslint-disable-next-line no-undef
      chai.expect(PrimeGen(20)).to.have.members([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) => [1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.have.members([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) => [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.have.members([10, 21, 33, 46, 60]);
    });
  });
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(100) => [41, 6] ', function () {
      chai.expect(maxPrimeSum(100)).to.have.members([41, 6]);
    });
    it('maxPrimeSum(1000) => [953, 21]', function () {
      chai.expect(maxPrimeSum(1000)).to.have.members([953, 21]);
    });
  });
});
