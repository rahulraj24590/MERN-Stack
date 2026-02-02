// Data Types

// Primitive = Simple data
// Non-Primitive = Complex data (Array, Object, Function)

// Primitive data types are basic (simple) data types that store a single value and are not objects.
// They are immutable (cannot be changed directly).
// Stored by value

// Primitive types:
// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol


// Non-primitive data types are complex data structures that can store multiple values and are stored by reference.

// Non-Premitive types:
// Object
// Array
// Function

// 1. Number
// Used for integers and decimals.

// let a = 20;
// let b = -5;
// let c = 2.5;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);



// 2. string
// Used for text (inside quotes).

// let name = "Rahul";
// let city = "Jalandhar";

// console.log(name);
// console.log(city);

// console.log(typeof name);
// console.log(typeof city);



// 3. Undifined
// When a variable is declared but not assigned a value.

// let carModel;
// console.log(carModel);
// console.log(typeof carModel);



// 4. Null
// Represents an intentional empty value.
// Data type is object

// let data = null;
// console.log(data);
// console.log(typeof data);


// 5. BigInt:
// Used for very large integers (bigger than Number limit).

// let bigNum = 1234567891234567n;
// console.log(bigNum);
// console.log(typeof bigNum)


// 6. Boolean
// Only two values: true or false.

// let isStudent = true;
// let isloggedIn = false;

// console.log(isStudent);
// console.log(isloggedIn);

// console.log(typeof isStudent);
// console.log(typeof isloggedIn);



// 7. Symbol
// Used to create unique values (mostly advanced usage).

// let id = Symbol("RR");
// console.log(id);
// console.log(typeof id);



// 8. Object:
// Object data type in JavaScript stores data in key–value pairs and is used to represent complex or real-world entities.

// let person = {
//     name: "Rahul",
//     age: 24,
//     isStudent: true
// };

// console.log(person);
// console.log(typeof person);


// Accessing object properties
// 1. Dot Notation

// console.log(person.name);

// 2. Bracket Notation

// console.log(person["age"]);


// Modify object values

// person.name = "Raj";
// person.age = 21;

// console.log(person);


// ** Object with Methods (Functions)


// Example 

// let mobile = {
//   brand: "Samsung",
//   price: 20000,
//   features: ["5G", "AMOLED", "5000mAh"]
// };

// console.log(mobile);

// Objects can contain:
// Strings
// Numbers
// Booleans
// Arrays
// Functions
// Even other objects

 