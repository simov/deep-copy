
var t = require('assert')
var dcopy = require('../')


describe('preserve', function () {
  it('number', function () {
    var copy = dcopy(42)
    t.deepStrictEqual(copy, 42)
  })

  it('string', function () {
    var copy = dcopy('a')
    t.deepStrictEqual(copy, 'a')
  })

  it('boolean', function () {
    var copy = dcopy(true)
    t.deepStrictEqual(copy, true)
  })
})

describe('copy', function () {
  it('object', function () {
    var target = {a: 0}
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy.a = 1
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target, {a: 0})
    t.deepStrictEqual(copy, {a: 1})
  })

  it('array', function () {
    var target = [0]
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy[0] = 1
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target, [0])
    t.deepStrictEqual(copy, [1])
  })

  it('date', function () {
    var target = new Date(2017, 0, 1)
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy.setMonth(5)
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target.getMonth(), 0)
    t.deepStrictEqual(copy.getMonth(), 5)
  })
})


describe('deep copy', function () {
  it('object', function () {
    var target = {
      object: {a: 0}
    }
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy.object.a = 1
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target, {object: {a: 0}})
    t.deepStrictEqual(copy, {object: {a: 1}})
  })

  it('array', function () {
    var target = {
      array: [0]
    }
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy.array[0] = 1
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target, {array: [0]})
    t.deepStrictEqual(copy, {array: [1]})
  })

  it('date', function () {
    var target = {
      date: new Date(2017, 0, 1)
    }
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    copy.date.setMonth(5)
    t.notDeepStrictEqual(target, copy)

    t.deepStrictEqual(target.date.getMonth(), 0)
    t.deepStrictEqual(copy.date.getMonth(), 5)
  })
})

describe('deep preserve', function () {
  it('function', function () {
    var target = {
      func: function () {}
    }
    var copy = dcopy(target)
    t.deepStrictEqual(target, copy)

    t.deepStrictEqual(typeof copy.func, 'function')
  })
})
