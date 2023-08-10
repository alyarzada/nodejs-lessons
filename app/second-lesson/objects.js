// mutability vs immutability

// 1. Primitive types
var fruitOne = "alma";
var fruitTwo = fruitOne;

fruitOne = "armud";

// Primitive types are immutable
console.log(fruitOne); /* return armud */
console.log(fruitTwo); /* return alma */

// 2. Reference types
var userOne = {
  name: "Kazim",
  surname: "Alyarov",
};
var userTwo = userOne;

userOne.name = "Tunar";

console.log(userOne); /* return { name: 'Tunar', surname: 'Alyarov' } */
console.log(userTwo); /* return { name: 'Tunar', surname: 'Alyarov' } */

// the reult is reference types are mutable and primitive types are immutable

// to solve this issue, we can use spread operator
var userTwo = {
  ...userOne,
};
