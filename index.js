
;(function (name, root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory()
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
    define(factory)
  }
  else {
    root[name] = factory()
  }
}('dcopy', this, function () {
  /**
   * Deep copy objects and arrays
   *
   * @param {Object/Array} target
   * @return {Object/Array} copy
   * @api public
   */

  return function (target) {
    if (/number|string|boolean/.test(typeof target)) {
      return target
    }
    if (target instanceof Date) {
      return new Date(target.getTime())
    }
    var copy = (target instanceof Array) ? [] : {}
    ;(function read (target, copy) {
      for (var key in target) {
        var obj = target[key]
        if (obj instanceof Array) {
          var value = []
          var last = add(copy, key, value)
          read(obj, last)
        }
        else if (obj instanceof Date) {
          var value = new Date(obj.getTime())
          add(copy, key, value)
        }
        else if (obj instanceof Object && typeof obj !== 'function') {
          var value = {}
          var last = add(copy, key, value)
          read(obj, last)
        }
        else {
          var value = obj
          add(copy, key, value)
        }
      }
    }(target, copy))
    return copy
  }

  /**
   * Adds a value to the copy object based on its type
   *
   * @api private
   */

  function add (copy, key, value) {
    if (copy instanceof Array) {
      copy.push(value)
      return copy[copy.length - 1]
    }
    else if (copy instanceof Object) {
      copy[key] = value
      return copy[key]
    }
  }
}))
