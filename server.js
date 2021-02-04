const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
    let a = req.url;
    if (a === '/') {
        let content = fs.readFileSync('index.html');
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(`<p>You requested for ${a} and blah blah blah</p>`);
    }
});

server.listen(7000);
