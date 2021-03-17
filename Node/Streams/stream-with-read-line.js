var fs = require('fs');
const ReadLineStream = require('readline-stream');

var input = fs.createReadStream('file1.txt');
var output = fs.createWriteStream('file2.txt');
 
var lineStream = ReadLineStream({});
input.pipe(lineStream);
lineStream.pipe(output);