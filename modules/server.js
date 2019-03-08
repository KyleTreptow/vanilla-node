module.exports.runServer= function(port){
  var http = require('http');
  var fs = require('fs');
  var url = require("url");
  http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if(req.url == '/'){ // HTML TEMPLATE
      fs.readFile('./public/templates/home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    } else if(req.url == '/public/css/style.css'){ // CSS STYLESHEET
      fs.readFile('.'+req.url, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    } else { // ANYTHING ELSE
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(q.pathname);
      res.end();
    }

  }).listen(port || 8080); // defaults to 8080
}
