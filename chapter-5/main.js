var fs = require('fs');

// get the directory path
var dirPath = process.argv[2];
console.log(dirPath);

// get the extension
var fileExt = process.argv[3];
console.log(fileExt);

// reading and output

file = fs.readdir(dirPath, function(err, list){
// data is an array of file name strings
	for(i=0;i<list.length;i++){
		console.log(data[i]);
	}
});
