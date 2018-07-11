# Logmeister

A super simple and fast logger.

## Getting up and running

1. `npm install --save logmeister`
2. Import or require logmeister on your project!

Additionally, you should set options to match your needs. Check the API.

## Logging levels

We support info, error, debug, warn and verbose levels off the bat. How they interact is based on the options function.  
Default options for logging on console are info, error and warn. For file logging are info, error, debug and warn.  
Default path for log is `/logs/`.

## API

### setOptions(console, file, lPath)
Set the options for the logger. Console variable is an array containing the options to log on console, while file is the array containing options to log on file.  
The lPath variable contains the path to the logs.  

Variable examples:
```
consoleLogLevels = ['info', 'error', 'warn']
fileLogLevels = ['info', 'error', 'debug', 'warn']
loggerPath = process.cwd() + '/logs/'
```

### log(level, processName, message)

Log message with level and process name.

### info(processName, message)

Log message with level being info with process name.

### warn(processName, message)

Log message with level being warn with process name.

### debug(processName, message)

Log message with level being debug with process name.

### error(processName, message)

Log message with level being error with process name.

### verbose(processName, message)

Log message with level being verbose with process name.

## License

Copyright (c) 2018, Embedded Adventures
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

- Neither the name of Embedded Adventures nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF 
THE POSSIBILITY OF SUCH DAMAGE.

## Issues and/or contact

Send an e-mail to support@embeddedadventures.com regarding any issues with the logger. Should any issue appear, feel free to post the issue on the github page.