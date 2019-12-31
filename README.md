# http-logs
 Simple program that reads a log file and displays statistics

## How to use ?
    node watch-logs --path=/path/to/log/file.log --time=10000
path arg is optional (default to /tmp/access.log).
time arg is optional (default to 10000 milliseconds).

## Needs

- we need to keep the file open so we can continuously read it in realtime, as it's modified
- we need to read the file every 10 seconds (could be configurable)
- we need to display stats about those past 10 seconds

## Difficulties
- I didn't know how to keep reading a file as it's modified in nodejs
- I had to create a fake realtime log to test my code