//主要找与java不同与相似处 let const var

//1.1 var undefined
console.log(a);// undefined
var a = 'I love King!';
console.log(a);// I love King!

//1.2 var 多次赋值
var b = 5;
var b = 'Warrior';
console.log(b);//Warrior

//1.3 let 局部变量，const 常量
var PI = 'a';
if(true){
	try{
		console.log(PI);//局部变量 暂时性锁区
	}catch(err){
		alert(err);
	}
	const PI = '3.14';
	console.log(PI);
}