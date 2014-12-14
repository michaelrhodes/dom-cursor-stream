# dom-cursor-stream
`dom-cursor-stream` is a module that wraps up [DOMCursor](https://developer.mozilla.org/en-US/docs/Web/API/DOMCursor) objects in readable streams.

## install
```sh
$ npm install dom-cursor-stream
```

## usage
```js
var readable = require('dom-cursor-stream')
var cursor = navigator.mozContacts.getAll()

readable(cursor)
  .on('error', console.error.bind(console))
  .on('readable', function (contacts) {
    var contact = this.read()
    console.log('contact:', contact.name.join('\n'))
  })
```

## Test
I haven’t been able to find a DOMCursor value that isn’t reliant on increased permissions, so it’s a bit hard to write good tests at the moment. For what it’s worth, I’ve run the usage example in a privileged app on my Open C and it worked a treat…
