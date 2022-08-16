//Math.round(x)	Returns x rounded to its nearest integer

console.log(Math.round(4.6));

//Math.ceil(x)	Returns x rounded up to its nearest integer

console.log(Math.ceil(4.4));

//Math.floor(x)	Returns x rounded down to its nearest integer

console.log(Math.floor(4.7));

//Math.trunc(x)	Returns the integer part of x (new in ES6)

console.log(Math.trunc(4.7));

//Math.sign(x) returns if x is negative, null or positive:

console.log(Math.sign(4));

//Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.pow(8, 2));

//Math.sqrt(x) returns the square root of x:

console.log(Math.sqrt(64));

//Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(-4.7));

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians). Angle in radians = Angle in degrees x PI / 180.

console.log("The sin value of 90 degrees is " + Math.sin(90 * Math.PI / 180));

//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians). Angle in radians = Angle in degrees x PI / 180.

console.log("The cosine value of 0 degrees is " + Math.cos(0 * Math.PI / 180));

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

console.log(Math.random());

//Math.log(x) returns the natural logarithm of x.

console.log(Math.log(1));

//Math.log2(x) returns the base 2 logarithm of x.

console.log(Math.log2(8));

//Math.log10(x) returns the base 10 logarithm of x.

console.log(Math.log10(1000));