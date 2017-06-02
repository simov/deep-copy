
# deep-copy

[![npm-version]][npm] [![travis-ci]][travis] [![coveralls-status]][coveralls]


```js
var dcopy = require('deep-copy')

// deep copy object
var copy = dcopy({a: {b: [{c: 5}]}})

// deep copy array
var copy = dcopy([1, 2, {a: {b: 5}}])
```

### [Benchmarks][benchmarks]

Benchmarks comparing `deep-copy` to other libraries across all Node LTS versions.

  [npm-version]: https://img.shields.io/npm/v/deep-copy.svg?style=flat-square (NPM Version)
  [travis-ci]: https://img.shields.io/travis/simov/deep-copy/master.svg?style=flat-square (Build Status)
  [coveralls-status]: https://img.shields.io/coveralls/simov/deep-copy.svg?style=flat-square (Test Coverage)

  [npm]: https://www.npmjs.com/package/deep-copy
  [travis]: https://travis-ci.org/simov/deep-copy
  [coveralls]: https://coveralls.io/r/simov/deep-copy?branch=master
  [benchmarks]: https://github.com/ahmadnassri/benchmark-node-clone
