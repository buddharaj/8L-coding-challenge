const { expect } = require('chai');
const problem2 = require('../problems/problem2');
const constants = require('../constants');

describe('Testing function removeDuplicates', () => {
  let input;
  const exec = (input1) => problem2.removeDuplicates(input1);

  it('should remove duplicate elements from an array1', () => {
    input = ['a', 'b', 'c', 'a', 'b', 'd'];
    expect(exec(input)).to.be.an('array').to.have.lengthOf(4).to.eql(['a', 'b', 'c', 'd']);
  });
  it('should remove duplicate elements from an array2', () => {
    input = [4, 4, 3, 2, 3, 1];
    expect(exec(input)).to.be.an('array').to.have.lengthOf(4).to.eql([4, 3, 2, 1]);
  });
  it('should return the same array if no duplicate exists', () => {
    input = [1, 2, 3, 4];
    expect(exec(input)).to.be.an('array').to.have.lengthOf(4).to.eql(input);
  });
  it('should throw error when no input is passed', () => {
    expect(() => exec()).to.throw(constants.ERROR_INVALID_INPUT);
  });

  it('should throw error when empty array is passed', () => {
    expect(() => exec([])).to.throw(constants.ERROR_INVALID_INPUT);
  });
  it('should throw error when string is passed', () => {
    expect(() => exec('wrong input')).to.throw(constants.ERROR_INVALID_INPUT);
  });
});
