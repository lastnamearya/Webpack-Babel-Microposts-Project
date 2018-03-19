/*
  - It's Common.js, not ES2015 Code
  - We dont' have to use .js in the end after calling our module './mymodule1.js' , that's how bring modules that we install with npm (node_modules)
  - Example :- for adding express.js we need to require -> require('express'); That's the actual node module
*/

// Importing ES5 Module
// const person = require('./mymodule1');

// Importing ES2015 Module, using Destructuring we can pull out multiple things (specify each one)
// import { person, sayHello } from './mymodule2';

// Importing everything without specifing each item
import * as mod from './mymodule2';

// For accessing use mod with dot notation
console.log(mod.person.name); 

console.log(mod.sayHello());