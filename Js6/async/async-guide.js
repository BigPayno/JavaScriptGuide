function doNothing(){
	
}

async function data(){
	//阻塞等待
	setTimeout(doNothing(),2000);
	return 'Walking in wires!';
}

//相当于Java的CompleteFuture，成功时异步的执行
data().then(data=>{
	alert('async '+data);
});

//会先执行，因为data会等待，但是因为异步不阻塞
alert('Imagine Dragons!');