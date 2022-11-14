// Run using terminal - <path> node createServer.js


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('MyFile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
})
server.listen(3000, () => {
    console.log("Example server listening at http://localhost:3000")
});