// map() is an array method that loops through an array and returns a new transformed array.

// Important Points
// map() does not change original array
// Always returns a new array
// Best for data transformation


// Syntax:

// array.map(function(currentValue, index, array) {
//     return newValue;
// });


// Simple Example

// let numbers  = [2, 4, 6, 8];
// let double = numbers.map(num => num * 2);
// console.log(double)


// Example with Strings

// let names = ["rahul", "Harshita", "raj"];
// let upperC = names.map(uppr => uppr.toUpperCase());
// console.log(upperC);


// Example with Objects

// let students = [
//     {name : "Rahul", marks : 80},
//     {name: "Harshita", marks : 75}
// ];

// let marksOnly = students.map(m => m.marks);
// console.log(marksOnly);


// Real-life Example

// let salary = [10000, 15000, 20000];
// let newSalary = salary.map(s => s + s*0.1);
// console.log(newSalary);
