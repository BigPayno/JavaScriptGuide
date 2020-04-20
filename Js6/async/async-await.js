function promise(success,ms){
	return new Promise(function(resolve,reject){
		if(success==true){
			setTimeout(resolve('success!'),ms);
		}else{
			setTimeout(reject('failed!'),ms);
		}
	});
}

async function asyncFun(success,ms){
	//阻塞等待直到Promise处理结束，相当于Future.get
	let msg = await promise(success,ms);
	alert(msg);
}

asyncFun(true,1000);
asyncFun(false,2000);



