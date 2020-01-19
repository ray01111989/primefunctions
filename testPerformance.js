/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

describe('Test for Performance', function () {
  it('maxPrimeSum(10000) should take <= 20ms', function () {
    this.timeout(20);
    chai.expect(maxPrimeSum(10000)).to.have.all.members([9521, 65]);
  });
  it('maxPrimeSum(100000) should take <= 200ms', function () {
    this.timeout(200);
    chai.expect(maxPrimeSum(100000)).to.have.all.members([92951, 183]);
  });
});
