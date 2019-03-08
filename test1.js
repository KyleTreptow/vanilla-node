// Modules
var today = require("./modules/today.js");
var server = require("./modules/server.js");

// Colors
var
dim = '\x1b[2m%s\x1b[0m',
black = '\x1b[30m%s\x1b[0m',
red = '\x1b[31m%s\x1b[0m',
green = '\x1b[32m%s\x1b[0m',
yellow = '\x1b[33m%s\x1b[0m',
blue = '\x1b[34m%s\x1b[0m',
magenta = '\x1b[35m%s\x1b[0m',
cyan = '\x1b[36m%s\x1b[0m',
white = '\x1b[37m%s\x1b[0m';

// Log
console.log(dim, '///////////////////');
console.log(cyan,'Sample Color Text');
console.log(
  'Logging Test #1',
  today.getToday(),
  today.getTime('pst')
);
console.log(dim, '///////////////////');

// Serve
var port = 8080;
console.log(green, 'Running server on port '+port)
server.runServer(port);
