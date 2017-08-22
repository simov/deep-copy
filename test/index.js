
var t = require('assert')
var dcopy = require('../')


describe('deep-copy', function () {
  var obj = {
    a: 0,
    b: [0,1,2],
    c: {
      a: 0,
      b: 1,
    },
    d: function () {},
    e: new Date(2017, 0, 1)
  }
  var arr = [
    0,
    1,
    {
      a: 0,
      b: {
        c: 1
      }
    },
    new Date(2017, 0, 1)
  ]

  it('deep copy object', function () {
    var copy = dcopy(obj)
    copy.c = {c: 15}
    t.deepEqual(obj.c, {a: 0, b: 1})
    t.deepEqual(copy.c, {c: 15})
  })

  it('deep copy array', function () {
    var copy = dcopy(arr)
    copy[2].b = {d: 15}
    t.deepEqual(arr[2].b, {c: 1})
    t.deepEqual(copy[2].b, {d: 15})
  })

  it('deep copy date', function () {
    var copy = dcopy(obj)
    t.deepEqual(copy.e.getTime(), new Date(2017, 0, 1).getTime())
  })

  it('preserve numbers', function () {
    var copy = dcopy(42)
    t.deepEqual(copy, 42)
  })

  it('preserve strings', function () {
    var copy = dcopy('a')
    t.deepEqual(copy, 'a')
  })

  it('preserve booleans', function () {
    var copy = dcopy(true)
    t.deepEqual(copy, true)
  })

  it('preserve dates', function () {
    var date = new Date(2017, 5, 1)
    var copy = dcopy(date)
    date.setMonth(0)
    t.notDeepEqual(date.getTime(), new Date(2017, 5, 1).getTime())
    t.deepEqual(copy.getTime(), new Date(2017, 5, 1).getTime())
  })

  it('preserve functions', function () {
    var copy = dcopy(obj)
    t.ok(typeof obj.d === 'function')
    t.ok(typeof copy.d === 'function')
  })
})
