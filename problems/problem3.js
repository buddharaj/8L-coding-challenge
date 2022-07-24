const problem1 = require('./problem1');
const problem2 = require('./problem2');
const constants = require('../constants');

const findArray = (list, search) => list.findIndex((element) => element.includes(search));

module.exports = {

  /**
     * @description - function to get specialities name exits for given ids
     * @param {array} ids - input specialities ids
     * @param {array} list - input specialities list
     * @return {array} - final array with specialities name
    */
  getSpecialtiesNames(ids = [], list = []) {
    if (!ids || ids.constructor !== Array || !ids.length
        || !list || list.constructor !== Array || !list.length) {
      throw new Error(constants.ERROR_INVALID_INPUT);
    }
    let newIds = ids.map((element) => (problem1.cleanedUp(element)));
    newIds = problem2.removeDuplicates(newIds);
    const response = [];
    newIds.forEach((id) => {
      const index = findArray(list, Number(id));
      if (index > 0 && list[index][1]) {
        response.push(list[index][1]);
      }
    });
    return response;
  },
};
