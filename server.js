const http = require('http');
const url = require('url');

const server = http.createServer((req, resp) => {
    const {pathname} = url.parse(req.url);
    // console.log(url.parse(req.url));

    if(pathname === '/prima-pagina'){
        resp.end('Prima pagina');
    } else if(pathname === '/seconda-pagina') {
        resp.end('Seconda pagina');
    } else if(pathname === '/') {
        resp.end('HOME PAGE');
    } else {
        resp.writeHead(404);
        resp.end('Pagina non trovata!')
    }
});

server.listen(3000, () => {
    console.log('Server connesso correttamente!')
});