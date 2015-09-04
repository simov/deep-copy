
var should = require('should')
var dcopy = require('../')


describe('deep-copy', function () {
  var obj = {
    a: 0,
    b: [0,1,2],
    c: {
      a: 0,
      b: 1,
    },
    d: function () {}
  }
  var arr = [
    0,
    1,
    {
      a: 0,
      b: {
        c: 1
      }
    }
  ]

  it('deep copy object', function () {
    var copy = dcopy(obj)
    copy.c = {c: 15}
    should.deepEqual(obj.c, {a: 0, b: 1})
    should.deepEqual(copy.c, {c: 15})
  })

  it('deep copy array', function () {
    var copy = dcopy(arr)
    copy[2].b = {d: 15}
    should.deepEqual(arr[2].b, {c: 1})
    should.deepEqual(copy[2].b, {d: 15})
  })

  it('preserve functions', function () {
    var copy = dcopy(obj)
    obj.d.should.be.type('function')
    copy.d.should.be.type('function')
  })
})
