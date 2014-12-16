# dom-cursor-stream
`dom-cursor-stream` is a module that wraps up [DOMCursor](https://developer.mozilla.org/en-US/docs/Web/API/DOMCursor) objects in readable streams.

[![Build status](https://travis-ci.org/michaelrhodes/dom-cursor-stream.png?branch=master)](https://travis-ci.org/michaelrhodes/dom-cursor-stream)

## install
```sh
$ npm install dom-cursor-stream
```

## usage
```js
var readable = require('dom-cursor-stream')
var through = require('through2')
var cursor = navigator.mozContacts.getAll()

readable(cursor)
  .on('error', console.error.bind(console))
  .pipe(through.obj(function (contact, enc, next) {
    console.log('contact:', contact.name.join('\n'))
    next()
  }))
```
