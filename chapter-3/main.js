var fs = require('fs');

// reading the file in a buffer object containing the complete contents of the file

var bufferObj = fs.readFileSync(process.argv[2]);

// converting the buffer to string

var strFile = bufferObj.toString();

// counting the newline characters

console.log(strFile.split('\n').length -1 );
