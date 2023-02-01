// when an export default is imported, must be out of destructuration (as greeting).
import greeting, {Greeting, PI, user} from './constants.js' 

import {arithmetic as calculations } from './arithmetic.js'

console.log('modules.js File');
console.log(PI, user);

console.log(calculations.sum(2,3));

greeting();
let greet = new Greeting();
greet;
// console.log(greet);
