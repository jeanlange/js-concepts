//const personName = "Jean";

// tell it to bring in 'personName', the variable, from the library file
// you can import more than one exported thing at once
import { personName, sayHi } from "./library.js";
//import { sayHi } from "./library.js";

console.log(personName);
sayHi();
