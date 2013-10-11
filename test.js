var assert = require('assert')

var wilson = require('./')

describe('Wilson Score', function () {
  it('should be lower than the average', function () {
    assert.ok(wilson(3, 5) < 3 / 5)
  })

  it('should be 0 if there are no ups', function () {
    assert.equal(wilson(0, 100), 0)
  })
})