var fs = require('fs'),
    lineno=0;

var stream = fs.createWriteStream('test.log', {flags:'a'});

stream.on('open', function() {
    console.log('Stream opened, will start writing in 2 secs');
    setInterval(function() { stream.write('127.0.0.1 - - [28/Jul/2006:10:27:32 -0300] "GET /hidden/ HTTP/1.0" 404 7218'+'\n'); }, 2000);
});