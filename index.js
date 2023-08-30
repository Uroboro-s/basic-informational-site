const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;
    console.log(fileName);
    fs.readFile(fileName, function(error, data) {
        if(error) {
            
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(fs.readFileSync('404.html', (err, data) => {
                if(err) console.log("404 Not Found");
                return data;
            }));
            return res.end();
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);