const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});

    res.write(
        '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<title>Home page</title>' +
        '</head>' +
        '<body>' +
        '<h1>Prima pagina in HTML con node.js</h1>' +
        '</body>' +
        '</html>'
        );

    res.end();
});

server.listen(8081);