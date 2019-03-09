// Modules
var today = require("./modules/today.js");
var server = require("./modules/server.js");
var colors = require("./modules/colors.js");

// Log
console.log(colors['dim'], '///////////////////');

console.log(
  'Node Test Server | ',
  today.getToday(),
  today.getTime('pst')
);

console.log(colors['dim'], '///////////////////');

// Serve
var port = 8080;
console.log(colors['green'], 'Running server on port '+port)
server.runServer(port);
