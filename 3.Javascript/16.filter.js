// Filter
// filter() is an array method that:

// goes through each element of an array
// checks a condition
// keeps only those elements that return true

// It returns a new array
// It does NOT change the original array

// Syntax

// array.filter(function(element, index, array) {
//     return condition; // true or false
// });


// Filter even numbers

// let num = [2,3,4,5,6,7,8,9];
// let evenNum = num.filter(n => n % 2 ===0);
// console.log(evenNum);


// Marks greater than 60

// let marks = [22, 34, 45, 56, 67, 77, 78, 79,89, 33];
// let pass = marks.filter(m => m > 60);
// console.log(pass);


// Filter objects

// let students = [
//     {name: "Rahul", marks: 82},
//     {name: "Harshita", marks: 77},
//     {name: "Subham", marks: 70}
// ];

// let topper = students.filter(s => s.marks >= 75);
// console.log(topper);

// Using index parameter

// let nums = [10, 20, 30, 40];
// let filtered = nums.filter((value, index) => index > 1);
// console.log(filtered); // [30, 40]


// Real Life Example

// let prices = [199, 499, 99, 799, 150];
// let affordable = prices.filter(p => p < 200);
// console.log(affordable); // [199, 99, 150]



// Even numbers less than 50

// let num = [10, 23, 33, 23, 54, 42, 22]
// let set = 50;

// let numbers = num.filter((n) => n <= set && n % 2 === 0);
// console.log(numbers);


// numbers between 23 and 63

// let num = [10, 23, 33, 26, 54, 42, 22, 74, 88, 87];


// let numbers = num.filter((n) => n >= 23 && n <= 63);
// console.log(numbers);

