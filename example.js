var readable = require('dom-cursor-stream')
var cursor = navigator.mozContacts.getAll()

readable(cursor)
  .on('error', console.error.bind(console))
  .on('readable', function (contacts) {
    var contact = this.read()
    console.log('contact:', contact.name.join('\n'))
  })
