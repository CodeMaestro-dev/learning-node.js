// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./3-name');
const sayHi = require('./4-utils');
const data = require('./5-alternative-flavor');
console.log(data);
require('./6-mind-grnade');
sayHi('Tioluwani');
sayHi(names.Tiolu);
sayHi(names.Lolu);
sayHi(names.Folu);