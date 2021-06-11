// 1. 导入的{}中定义的变量
import {flag, sum} from './aaa.js'

if (flag) {
  console.log('小明是天才, 哈哈哈');
}

// 2. 直接导入 export 定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3. 导入 export 的 function/class
import {mul,Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run();

// 4. 导入 export default 中的内容
import addr from "./aaa.js";
addr('你好啊');

// 5. 统一全部导入
import * as aaa from './aaa.js';
console.log(aaa.flag);