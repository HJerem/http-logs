var fs = require('fs'),
    bite_size = 256,
    readbytes = 0,
    file;

fs.open('test.log', 'r', function(err, fd) {
    if(err) throw err;
    file = fd; 
    // fs.readFile('tmp/access.log', function(err, buffer) {
    //     console.log(err, buffer, buffer.toString());
    // });
    setTimeout(function() {
        processLines(fd);
    }, 10000);
});

function processLines(fd) {
    fs.read(fd, Buffer.alloc(99999), 0, 99999, null, function(err, bytecount, buff) {
        console.log(buff.toString());
        console.info('Waiting 10 seconds...');
        setTimeout(function() {
            processLines(fd);
        }, 10000);
    });
}