// Logical && operator
let score = 8;
console.log("Mid-level skills: " + (score < 10 && score > 0));

// Logical || operator
let timeRemaining = 0;
let energy = 10; 
console.log("Game over: " + (timeRemaining == 0 || energy == 0));

// Modulus operator
let num1 = 2
let num2 = 5
let test1 = num1 % 2;
let test2 = num2 % 2
let result1 = test1 == 0;
let result2 = test2 == 0;

console.log("Is " + num1 +  " an even number? " + result1);
console.log("Is " + num2 +  " an even number? " + result2);

// Add numbers
console.log(5 + 10);

// Concatenate numbers and strings
let now = "Now in ";
let three = 3;
let d = "D!";

console.log(now + three + d);

// Use the += operator
let counter = 0;
counter += 5;
counter += 3;
console.log(counter);