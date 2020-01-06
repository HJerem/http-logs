# http-logs
 Simple program that reads a log file (w3c-formatted HTTP access log) and displays statistics.

## How to use ?
### Prerequisites
You will need to have Node.js installed.

### Run program
    node watch-logs --path=/path/to/log/file.log --time=10000 --limit=5

#### Optional arguments
path: relative or absolute path to file (default to /tmp/access.log).

time: time in milliseconds to wait between two reads of the file (default to 10000 milliseconds).

limit: limit of sections of the website to display (default to 5).

## Possible improvements
- show most visited webpages (not only section)
- show most recurrent IPs
- detect DDoS attack ?
- create notifications based on events (e.g. send an email or SMS if error rates go beyond 10%)
- save data to database to keep history
- display charts over time
- use ESLint on project
- implement tests

## Difficulties
- I didn't know how to keep reading a file as it's modified in Node.js
- I had to create a fake realtime log file to test my code
- I had to find the correct regex to be able to read and split data for each access log line