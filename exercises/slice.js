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