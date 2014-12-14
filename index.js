var Readable = require('readable-stream')
var inherits = require('inherits')

function DOMCursorStream (cursor) {
  if (!(this instanceof DOMCursorStream)) {
    return new DOMCursorStream(cursor)
  }

  Readable.call(this, {
    objectMode: true
  })

  this.ready = false
  this._cursor = cursor
  this._cursor.onsuccess = this._success.bind(this) 
  this._cursor.onerror = this._error.bind(this)
}

inherits(DOMCursorStream, Readable)

DOMCursorStream.prototype._read = function () {
  if (!this.ready) {
    return
  }

  if (this._cursor.done) {
    this.push(null)
    return
  }

  this._cursor.continue()
}

DOMCursorStream.prototype._success = function () {
  this.ready = true
  this.push(this._cursor.result)
}

DOMCursorStream.prototype._error = function () {
  this.emit('error', this._cursor.error)
}

module.exports = DOMCursorStream
