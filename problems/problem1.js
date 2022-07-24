const constants = require('../constants');

module.exports = {

  /**
     * @description - function to cleaned-up string with any non-numeric characters removed
     * @param {string} inputString - input String
     * @return {string} - cleaned up string
     */
  cleanedUp(inputString) {
    if (typeof inputString !== 'string') {
      throw new Error(constants.ERROR_INVALID_INPUT);
    }
    return inputString.replace(/[^0-9]/g, '');
  },

};
