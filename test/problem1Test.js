const { expect } = require('chai');
const problem1 = require('../problems/problem1');
const constants = require('../constants');

describe('Testing function cleanedUp', () => {
  const exec = (input) => problem1.cleanedUp(input);
  it('should remove non-numeric characters from a string1', () => {
    expect(exec('7-623')).to.eq('7623');
  });
  it('should remove non-numeric characters from a string2', () => {
    expect(exec('..2965a')).to.eq('2965');
  });
  it('should return empty when no numberic characters in a string', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(exec('..no numeric string available')).to.be.empty;
  });
  it('should throw error when no input string is passed', () => {
    expect(() => exec()).to.throw(constants.ERROR_INVALID_INPUT);
  });

  it('should throw error when array is passed', () => {
    expect(() => exec(['a', '1'])).to.throw(constants.ERROR_INVALID_INPUT);
  });
});
