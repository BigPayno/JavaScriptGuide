 //	Maps 和 Objects 的区别
//	    一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
//	    Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
//	    Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
//	    Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。


var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}