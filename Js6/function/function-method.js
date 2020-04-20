var func0 = (a)=>{return a}
var funcObj0 = { data: (a)=>{return a} }
alert('function call : '+func0(1))
setTimeout(()=>{
	alert(funcObj0.data('method call : 2'))
},2000);
