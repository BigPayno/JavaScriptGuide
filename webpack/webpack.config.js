const path = require('path');
module.exports = {
	//entry 依赖入口
	app: "./src/main.js",
	vendors: "./src/vendors.js",
	//output 输出
	output: {
	    filename: "bundle.js",
	    path: path.resolve(__dirname, 'dist')
	}
}