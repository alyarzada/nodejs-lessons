/* JavaScript has several global objects. Here are some of the most commonly used global objects:

Object: provides a base object for all JavaScript objects
Array: provides a collection of elements that can be accessed by index
String: represents a sequence of characters
Number: represents numbers
Boolean: represents a logical value (true or false)
Date: represents a date and time value
Math: provides mathematical constants and functions
RegExp: represents a regular expression pattern
Error: represents an error object


1.Number
	Number.MAX_VALUE: Represents the maximum representable numeric value in JavaScript.
	Number.MIN_VALUE: Represents the smallest positive numeric value greater than zero.
	Number.NaN: Represents a special "Not-a-Number" value.
	Number.POSITIVE_INFINITY: Represents positive infinity.
	Number.NEGATIVE_INFINITY: Represents negative infinity.
	Number.EPSILON: Represents the smallest difference between two representable numbers.

	Number.isNaN(): Checks if a value is NaN (Not-a-Number).
	Number.isFinite(): Checks if a value is a finite number.
	Number.parseInt(): Parses a string argument and returns an integer.
	Number.parseFloat(): Parses a string argument and returns a floating-point number.
	Number.toExponential(): Converts a number to its exponential notation.
	Number.toFixed(): Formats a number using fixed-point notation.
	Number.toPrecision(): Formats a number with a specified length.
	Number.toString(): Converts a number to a string representation with a specified radix (base).
	Number.valueOf(): Returns the primitive value of a Number object.

2.Object
	Object.prototype
	Object.create()
	Object.assign()
	Object.keys()
	Object.values()
	Object.entries()
	Object.hasOwnProperty()
	Object.defineProperty()
        Object.getOwnPropertyNames()

3.Array
	Array.prototype
	Array.length
	Array.from()
	Array.isArray()
	Array.of()
	... other array methods

4.String
	String.prototype
	String.fromCharCode()
	String.length
	... other string methods

5.Boolean
	Boolean.prototype
	Boolean.valueOf()
	Boolean.toString()

6.Date
	Date.prototype
	Date.now()
	Date.parse()
	Date.UTC()
	... other date methods
7.Math
	Math.PI - returns the value of pi (3.141592653589793)
	Math.E  - returns the value of e (2.718281828459045)
8.RegExp
	
9.Error
	Error.prototype.message: returns a string that contains a description of the error
	Error.prototype.name: returns a string that contains the name of the error (e.g., "Error", "TypeError", "ReferenceError", etc.)
	Error.prototype.stack: returns a string that contains a stack trace of the error
	Error.captureStackTrace(): creates a stack trace for the specified error object
	throw: throws an error, which will cause the program to stop executing unless the error is caught by a try...catch statement
	-There are also several built-in error types that inherit from the Error object, including TypeError, ReferenceError, RangeError, SyntaxError, URIError, and EvalError. */
