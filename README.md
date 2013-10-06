# The Nature of NodeJS Buffers

This is a simple journey that explores the nature of the NodeJS
[Buffer](http://nodejs.org/api/buffer.html).  After reading the docs there
are a still a few things that remain a mystery around buffers.

For instance:

- Which operations create new copies of existing buffers, vs which ops
  create buffers that reference the original memory.  The documentation is
  pretty clear when it comes to
  [slice](http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)
  but not so clear with other methods.

Through experimentation and examples we will explore the core node
buffers (and some useful additional modules from userland).

## Exercises

The following exercises have been created organically as I have had
questions that needed answering.  Apologies for them not being in any
order that makes sense...

### Does `Buffer.slice` work on a reference?

While the documentation is pretty clear about this, let's check for
ourselves.

```js
var a = new Buffer([0x00, 0x01, 0x02, 0x03]);
var b = a.slice(1, 3);

console.log(a);
// => <Buffer 00 01 02 03>

console.log(b);
// => <Buffer 01 02>

// update the contents of a
a[1] = 0xFF;

console.log(a);
// => <Buffer 00 ff 02 03>

console.log(b);
// => ?
```

### Does `Buffer.concat` create a copy?

```js
var a = new Buffer([0x00, 0x01, 0x02, 0x03]);
var b = new Buffer([0x04, 0x05, 0x06, 0x07]);
var c = Buffer.concat([a, b]);

console.log(a);
// => <Buffer 00 01 02 03>

console.log(b);
// => <Buffer 04 05 06 07>

console.log(c);
// => <Buffer 00 01 02 03 04 05 06 07>

// update the contents of a
a[0] = 0x10;

console.log(a);
// => <Buffer 10 01 02 03>

console.log(c);
// => ?
```
