const BLUE = Symbol("blue");
const RED1 = Symbol("red");
const RED2 = Symbol("red");

console.log(RED1 == RED2);
//	FLASE 每个都独一无二

let GREEN1 = Symbol("green");
let GREEN2 = Symbol.for("green");
let GREEN3 = Symbol.for("green")

console.log(GREEN1 == GREEN2);
// TRUE 搜索已经拥有的Symbol
console.log(GREEN3 == GREEN2);
// FALSE 类似常量池，For方法构造的

console.log(Symbol.keyFor(BLUE));
// undefined 搜索常量池中key为此的对象
console.log(Symbol.keyFor(GREEN2));

// Symbol()创造的对象独一无二，Symbol.for和keyFor都是针对享元模式

let array = Symbol.for(["a",""]);
console.log(typeof(Symbol.keyFor(array)));
// 只能保存为字符串