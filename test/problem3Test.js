const { expect } = require('chai')
const problem3 = require('../problems/problem3')
const constants = require('../constants')

describe('Testing function getSpecialtiesNames', () => {
  let ids
  let specialties
  const exec = (input1, input2) => problem3.getSpecialtiesNames(input1, input2)
  beforeEach(() => {
    ids = ['7-623', '8235', '8-235']
    specialties = [
      [1381, 'front-end web development'],
      [8235, 'data engineering'],
      [3434, 'API design'],
      [7623, 'security'],
      [9153, 'UX']
    ]
  })

  it('should return specialties names from given array', () => {
    expect(exec(ids, specialties)).to.be.an('array').to.have.lengthOf(2).to.eql(['security', 'data engineering'])
  })
  it('should return empty array when no id match', () => {
    ids = ['7-6231', '82351', '8-2351']
    expect(exec(ids, specialties)).to.be.an('array').to.have.lengthOf(0).to.eql([])
  })
  it('should return empty array when ids are wrong', () => {
    ids = ['wrong here', 'wrong here1', 'wrong here2']
    expect(exec(ids, specialties)).to.be.an('array').to.have.lengthOf(0).to.eql([])
  })
  it('should return empty array when no specialites match', () => {
    specialties = [
      [13811, 'front-end web development'],
      [82351, 'data engineering'],
      [34341, 'API design'],
      [76231, 'security'],
      [91531, 'UX']
    ]
    expect(exec(ids, specialties)).to.be.an('array').to.have.lengthOf(0).to.eql([])
  })
  it('should throw error when empty ids are passed', () => {
    ids = []
    expect(() => exec(ids, specialties)).to.throw(constants.ERROR_INVALID_INPUT)
  })

  it('should throw error when empty specialties are passed', () => {
    specialties = []
    expect(() => exec(ids, specialties)).to.throw(constants.ERROR_INVALID_INPUT)
  })
  it('should throw error when both input is not passed', () => {
    expect(() => exec()).to.throw(constants.ERROR_INVALID_INPUT)
  })
})
