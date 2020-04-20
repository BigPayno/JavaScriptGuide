function log(){
	console.log('log');
}

setTimeout(
	function(){
		alert('wait 1000!');
	},
	1000
);

setTimeout(log(),2000);