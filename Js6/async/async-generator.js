let compute = function* (a, b) {
  let sum = a + b;
  yield console.log(sum);
  let c = a - b;
  yield console.log(c);
  let d = a * b;
  yield console.log(d);
  let e = a / b;
  console.log(e);
};
// 执行一下这个函数得到 Generator 实例
let generator = compute(4, 2);

// 要使得函数中封装的代码逻辑得到执行，还得需要调用一次next方法。
generator.next();
generator.next();
generator.next();
generator.next();