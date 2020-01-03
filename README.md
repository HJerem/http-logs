# http-logs
 Simple program that reads a log file (w3c-formatted HTTP access log) and displays statistics.

## How to use ?
### Prerequisites
You will need to have Node.js installed.

### Run program
    node watch-logs --path=/path/to/log/file.log --time=10000
path argument is optional (default to /tmp/access.log).
time argument is optional (default to 10000 milliseconds).

## Needs
- we need to keep the file open so we can continuously read it in realtime, as it's modified
- we need to read the file every 10 seconds (could be configurable)
- we need to display stats about those past 10 seconds

## Difficulties
- I didn't know how to keep reading a file as it's modified in Node.js
- I had to create a fake realtime log file to test my code