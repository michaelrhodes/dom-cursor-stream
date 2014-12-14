var test = require('tape')
var readable = require('./index')

var sdcard = navigator.getDeviceStorage('sdcard')

test('it emits errors', function (assert) {
  assert.plan(1)
  readable(sdcard.enumerate())
    .on('error', function (error) {
      assert.ok(error instanceof DOMError, 'error is [object DOMError]')
    })
})
