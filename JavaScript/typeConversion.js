
// EXPLICIT conversion

// string conversion
var n = 34
stri = String(n);
console.log(stri,(typeof stri));

stri = String(true);
console.log(stri,(typeof stri));

stri = String(new Date());
console.log(stri,(typeof stri));

stri = String([1,2,3,4,5]);
console.log(stri, stri.length, (typeof stri))

var i = 75;
stri = i.toString()
console.log(stri, (typeof stri))

// number conversion

let num = Number("3434");
console.log(num,(typeof num))

num = Number("34d34");
console.log(num,(typeof num))

num = Number(false);
console.log(num,(typeof num))

num = Number([1,2,3,4,5,6,7,8,9])
console.log(num,(typeof num))

// boolean conversion
let bool = Boolean(1);
console.log(bool, (typeof bool))

bool = Boolean("hello");
console.log(bool, (typeof bool))

bool = Boolean("");
console.log(bool, (typeof bool))

// parseInt and parseFloat
let parse = parseInt('$100 dollars')
console.log(parse, (typeof parse))

parse = parseInt('+10.25990 kg')
console.log(parse, (typeof parse))

parse = parseFloat('+10.25990 kg')
console.log(parse, parse.toFixed(2), (typeof parse))

parse = parseFloat('ABC')
console.log(parse, (typeof parse))


//IMPLICIT conversion

let res = '3' + 4;
console.log(res, (typeof res))

res = '3' - 4;
console.log(res, (typeof res))

res = '3' - '3';
console.log(res, (typeof res))

res = '3' * 5;
console.log(res, (typeof res))

res = '3' + true;
console.log(res, (typeof res))

res = '3' - true;
console.log(res, (typeof res))

res = 10 - true;
console.log(res, (typeof res))

res = 10 - null;
console.log(res, (typeof res))

res = 10 - undefined;
console.log(res, (typeof res))