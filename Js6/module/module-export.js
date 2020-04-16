/*
	ES6 module 结合了CommonJS和AMD的优点：
	类似CommonJS，具有简洁的语法，对循环依赖的支持；
	类似AMD，支持异步加载和有条件的模块加载。
*/

//声明导出
export var msg = `
	Whatever it takes
	Cause I love the adrenaline in my veins`;
export function alertFunction(text){
	alert(text);
}
	
//别名导出
var cusName = 'payno';
export {cusName as name};

//默认导出（Java @Primary）
export default function defaultFunction(){
	console.log('I do whatever i take');
}