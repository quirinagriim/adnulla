const p = {}; // Declare a constant variable 'p' and assign it an empty object.

// Adding properties to the object
p.name = "John";
p.age = 30;

console.log(p); // Outputs: { name: 'John', age: 30 }

// Modifying properties of the object
p.age = 31;

console.log(p); // Outputs: { name: 'John', age: 31 }

// Adding a new property
p.city = "New York";

console.log(p); // Outputs: { name: 'John', age: 31, city: 'New York' }

// Attempting to reassign 'p' will cause an error
// Uncommenting the following line will result in a TypeError
// p = {};

// Since 'p' is declared with 'const', you cannot reassign it to a new object.
// However, you can still modify the existing object.
