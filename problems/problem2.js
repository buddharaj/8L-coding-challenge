const constants = require('../constants');

module.exports = {
  /**
     * @description - function to remove duplicates from ar array
     * @param {array} input - input array may contains duplicates
     * @return {array} - final array with non-duplicate elements
     */
  removeDuplicates(input) {
    if (!Array.isArray(input) || !input.length) {
      throw new Error(constants.ERROR_INVALID_INPUT);
    }
    return input.filter((element, index) => input.indexOf(element) === index);
  },

};
