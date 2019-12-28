const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('tmp/access.log'),
    // output: process.stdout,
    console: false
});

let logs = [];

readInterface.on('line', function(line) {
    const result = line.match(/^(\S+) (\S+) (\S+) \[([\w:/]+\s[+\-]\d{4})\] "(\S+)\s?(\S+)?\s?(\S+)?" (\d{3}|-) (\d+|-)\s?"?([^"]*)"?\s?"?([^"]*)?"?$/);
    let urlParts = result[6].split('/');
    logs.push({
        section: urlParts[1],
        url: result[6],
        code: result[8]
    });
});

readInterface.on('close', function() {
    console.log('end of file', logs);
});