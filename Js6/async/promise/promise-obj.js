/*
	对象的状态不受外界影响 （3种状态）
	    Pending状态（进行中）
	    Fulfilled状态（已成功）
	    Rejected状态（已失败）
	
	一旦状态改变就不会再变 （两种状态改变：成功或失败）
	    Pending -> Fulfilled
	    Pending -> Rejected
*/

function sleep(ms){
	return new Promise(function(resolve,reject){
		console.log('promise任务正在执行!')
		setTimeout(resolve,ms);
	})
}

sleep(1000).then(()=>console.log('promise任务完成后执行!'));
console.log('promise任务正在执行，尚未执行完');

let promise = new Promise(function(resolve, reject){
    console.log("AAA");
    resolve();
});
setTimeout(()=>console.log("DDD"), 0);
promise.then(() => console.log("CCC"));
console.log("BBB");