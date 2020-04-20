import axios from 'axios';

const instance = axios.create({
	baseURL:'http://www.baidu.com/',
	timeout:1000
})

instance.get('')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });