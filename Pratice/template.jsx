const person = { name: 'Alice', age: 30, city: 'New York', job: 'Engineer' };

// The 'rest' variable must be last:
const { city, ...details } = person;
console.log(city);    // Output: New York
console.log(details); // Output: { name: 'Alice', age: 30, job: 'Engineer' }

