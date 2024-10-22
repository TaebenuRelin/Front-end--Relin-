// // DESTRUCTURING

// // Destructuring (Array & Object)
// //Array Destrucuring
// const arr = [10, 20, 30];
// const [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// //0bject Destructuring
// const obj = { name: 'Relin', age: 21 };
// const { name, age } = obj;

// console.log(name); // Relin
// console.log(age); // 21

//Destructuring dengan Mengambil Sebagian Item (Array & Object)
// //Array Destructuring Sebagian
// const arr = [10, 20, 30, 40];
// const [first, , third] = arr;

// console.log(first); // 10
// console.log(third); // 30

// //Object Destructuring Sebagian
// const obj = { name: 'Relin', age: 21, city: 'Kupang' };
// const { name, city } = obj;

// console.log(name); // Relin
// console.log(city); // Kupang

// //Destructuring dengan Default Value (Array & Object)
// //Array Destructuring dengan Default Value
// const arr = [10];
// const [a = 1, b = 2] = arr;

// console.log(a); // 10
// console.log(b); // 2

// //Object Destructuring dengan Default Value
// const obj = { name: 'Relin' };
// const { name, age = 30 } = obj;

// console.log(name); // Relin
// console.log(age); // 30 (default value)

// //Destructuring dengan Rest Operator (Array & Object)
// //const arr = [10, 20, 30, 40];
// const [first, ...rest] = arr;

// console.log(first); // 10
// console.log(rest); // [20, 30, 40]

// //Object Destructuring dengan Rest Operator
// const obj = { name: 'Relin', age: 21, city: 'Kupang' };
// const { name, ...rest } = obj;

// console.log(name); // Relin
// console.log(rest); // { age: 21, city: 'Kupang' }

