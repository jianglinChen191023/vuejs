// 1. 使用 commonjs 的模块化规范
const {add, mul} = require('./mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2. 使用 ES6 的模块化的规范
import * as info from "./info.js";

console.log(info.name);
console.log(info.age);
console.log(info.height);