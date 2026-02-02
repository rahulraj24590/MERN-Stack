// 1. arrays are mutable

let student = ["Rahul", "12310302", "78%", "LPU"]
console.log(student);

student[1] = "12311302";
console.log(student);

// 2. Accessing values using index in array

console.log(student[3]);

// 3. lenght of the array

console.log(student.lenght);

// 4. array type is object

console.log(typeof student);

// **Array method **


let car = ["Audi", "Volvo", "BMW", "TATA"];

// 1.push: add to the last index of array

car.push("Ferrari");
console.log(car);

// 2.pop: remove last index of array

car.pop();
console.log(car);

// 3. unshift: add at start

car.unshift("Mercedes");
console.log(car);

// 4. shift: remove from start

car.shift();
console.log(car);

// 5. indexof: return the index of something

car.indexOf("BMW");
console.log(car);

// 6. include: it tells wheather the value is present in array or not, it gives output in boolean(true, false)

car.includes("Mini");
console.log(car);

// 7. concat: merge 2 arrays

let arr1 = ["Apple", "Banana"];
let arr2 = ["Guava", "Grapes"];
concatArr = 
console.log()

// 8. 

// 9. slice

let letter = ["a", "b", "c", "d", "e", "f"];
console.log(letter.slice());
console.log(letter.slice(2));
console.log(letter.slice(2,5));

// 10. splice: it is used to replace/remove and add a new element in an array

let fruit = ["apple", "banana", "guava", "pineapple"];

console.log(fruit.splice(3)); // it remove elements from index 3 to the end of the array

console.log(fruit.splice(0,1));
console.log(fruit.splice(0,1, "grapes", "lemon"));

console.log("fruit")


// 11. sort: 

let letters = ["a", "d", "e", "d", "b"];
console.log(letters.sort)






