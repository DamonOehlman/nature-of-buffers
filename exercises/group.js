var buffers = require('bl');

// create our test buffers
var a = new Buffer([0x00, 0x01, 0x02, 0x03]);
var b = new Buffer([0x04, 0x05, 0x06, 0x07]);

// group a + b in logical group c
var c = buffers([a, b]);

// slice within the first buffer boundary
var d = c.slice(1, 4);

// slice across the boundary
var e = c.slice(3, 7);

console.log(a);
// => <Buffer 00 01 02 03>

console.log(b);
// => <Buffer 04 05 06 07>

console.log(c);
// => { _bufs: [ <Buffer 00 01 02 03>, <Buffer 04 05 06 07> ], ... }

console.log(d);
// => <Buffer 01 02 03>

console.log(e);
// => <Buffer 03 04 05 06>

// update a
a[3] = 0xFF;

console.log(a);
// => <Buffer 00 01 02 ff>

console.log(d);
// => <Buffer 01 02 ff>

console.log(e);
// => <Buffer 03 04 05 06>