import { msg } from './module-export.js';
import { alertFunction } from './module-export.js';
alertFunction(msg);
//默认import不需要{}
import  defaultFun  from './module-export.js';
defaultFun();

//import函数可以实现按需加载