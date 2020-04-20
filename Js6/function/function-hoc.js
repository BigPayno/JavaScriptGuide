//高阶函数，1.以函数作为入参，2.以函数作为结果

//以函数作为入参
function invoke(method,predicate){
	if(typeof method === 'function'&& predicate == true){
		method();
	}
}

invoke(()=>{ alert('Whatever it takes!'); },true);

//以函数作为返回
function str(){
	return String;
}

setTimeout(()=>{ alert(str()('Imagine Dragons')); },1000);