//解构赋值

//基本 1  2  3
let [a,b,c] = [1,2,3];

//可嵌套  1  2  3
let [d,[e,[f]]] = [1,[2,[3]]];

//可忽略  1
let [g,] = [1,2];

//不完全解构  1  undifined
let [h,i] = [1,];
let [j,k] = [1];

//剩余运算符  1  [2,3,4]
let [l, ...m] = [1,2,3,4];

//字符串相等  a  b  c=> a  b
let [n,o,p] = 'abcd';
let [q,r] = 'abcd';

//解构默认值 1  undefined=>  2,undefined
let [s=1,t] = [];
let [u=1,v] = [2,3];

//基本解构
let { payno1, chad1 } = { payno , chad : 'chad'};
let { payno2 : chad2 } = { payno : 'chad'};

//可嵌套、可忽略、剩余运算符

//解构默认值
let { payno3 = 'a',chad3 = 'b'} = {payno3,'c'};