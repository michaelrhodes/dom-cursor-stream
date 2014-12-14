var readable = require('./index')
var cursor = navigator.mozContacts.getAll()

readable(cursor)
  .on('error', console.error.bind(console))
  .on('readable', function () {
    var contact = this.read()
    console.log('contact:', contact.name.join('\n'))
  })
