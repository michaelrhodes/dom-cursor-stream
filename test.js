var test = require('tape')
var through = require('through2')
var successful = require('faux-moz-dom/cursor/dummy/successful')
var erroneous = require('faux-moz-dom/cursor/dummy/erroneous')
var readable = require('./index')

test('it emits errors', function (assert) {
  assert.plan(1)
  readable(erroneous())
    .on('error', function (error) {
      assert.pass(error && error.name)
    })
})

test('it works', function (assert) {
  var i = 0
  var expected = ['one', 'two', 'three']

  assert.plan(expected.length)

  readable(successful())
    .pipe(through.obj(function (a, enc, next) {
      var b = expected[i++]
      assert.equal(a, b, b)
      next()
    }))
})
