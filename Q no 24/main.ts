// Define Variable
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","oranges"];

// Test for equality and inequality with string
console.log("Is apple is equal to apple");
console.log(apple =="apple");

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");

// Tests using LowercaseFunction
console.log("\nIs APPLE is equal to apple after coverting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");

console.log("\nIs APPLE is equal to apple after coverting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");

// Numerical tests
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// Not equal to
console.log("\nIs ten is not  equal to twenty?");
console.log(ten != twenty);

// Gretor than
console.log("\nIs ten is gretor than zero?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

 // Gretor than or equal to 
console.log("\nIs ten is gretor than or equal to 5?");
console.log(ten >= 5);
 
// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10 );

//Tests using "and" & "or" operators
console.log ("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);

console.log ("\n twenty is not equal to 10 amd twenty is greator than 10");
console.log(twenty != 10 && twenty > 30);

// Using ||(OR) 
console.log("\n 20 is gretor than so OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is gretor than so OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20)

// Test weather an item is include in array
console.log("\nIs oranges include in my Fruits array");
console.log(fruits.includes("oranges"));

// Not Include
console.log("\nIs oranges not include in my Fruits array");
console.log(fruits.includes("oranges"));





