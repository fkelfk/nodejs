var fs = require('fs'); 		//fs 모듈을 사용하겠다.

fs.readFile("sample.txt", 'utf-8', function(err, data){
    console.log(data);
});