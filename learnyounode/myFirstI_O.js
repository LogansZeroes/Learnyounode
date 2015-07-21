var fs = require('fs');

var fileContents = fs.readFileSync(process.argv.pop());

var numNewLines = fileContents.toString().split('\n')

console.log(numNewLines.length - 1)