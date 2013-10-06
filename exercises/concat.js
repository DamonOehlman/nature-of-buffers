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