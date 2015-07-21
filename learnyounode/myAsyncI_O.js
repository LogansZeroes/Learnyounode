var fs = require('fs');

// Commented below lines (which work) because I wanted to try using callbacks

// fs.readFile(process.argv.pop(),'utf8', function(error, data){

// 	if(error) throw error;

// 	var numNewLines = data.split('\n')

// 	console.log(numNewLines.length - 1)

// })

function readStuff (callback){
	
	fs.readFile(process.argv.pop(),'utf8', function(error, data){

		if(error) throw error;

		callback(data);

	})
}

readStuff( function (data){
	
	var numNewLines = data.split('\n')

	console.log(numNewLines.length - 1)
})