var fs = require('fs');

// get the filename only
var filename = process.argv[2];

// convert the buffer to the string in a asynchronous

file = fs.readFile(filename, function(err, data){
	console.log(data.toString().split('\n').length - 1);
});
