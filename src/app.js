/*
  - It's Common.js, not ES2015 Code
  - We dont' have to use .js in the end after calling our module './mymodule1.js' , that's how bring modules that we install with npm (node_modules)
  - Example :- for adding express.js we need to require -> require('express'); That's the actual node module
*/

// Importing ES5 Module
// const person = require('./mymodule1');

// Importing ES2015 Module
import { person } from './mymodule2';

console.log(person.name); 