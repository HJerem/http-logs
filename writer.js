const fs = require('fs');
const stream = fs.createWriteStream('test.log', {flags:'a'});
var HttpStatus = require('http-status-codes');
const someHttpStatusCodes = [
    HttpStatus.OK,
    HttpStatus.NOT_FOUND,
    HttpStatus.UNAUTHORIZED,
    HttpStatus.BAD_REQUEST,
    HttpStatus.MOVED_PERMANENTLY
];
const somePages = [
    '/contact/',
    '/about/', 
    '/api/v1/ressources',
    '/'
];

stream.on('open', function() {
    console.log('Stream opened, will start writing in 2 secs every 2 seconds');
    setInterval(function() {
        const randomHttpCode = someHttpStatusCodes[Math.floor(Math.random()*someHttpStatusCodes.length)];
        const randomPage = somePages[Math.floor(Math.random()*somePages.length)];
        stream.write(`127.0.0.1 - - [28/Jul/2006:10:27:32 -0300] "GET ${randomPage} HTTP/1.0" ${randomHttpCode} 7218`+'\n'); 
    }, 2000);
});