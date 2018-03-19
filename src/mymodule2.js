/*
  - ES6 Module. 
  - Simple export Syntax
*/ 

// This person can exported and used by other files
export const person = {
  name: 'John',
  age: 30
}

export function sayHello() {
  return `Hello ${person.name}`;
}

const greeting = 'Hello World';

// When we use default, we don't have to use curly braces.
export default greeting;