const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }

    if(req.url === '/about'){
        res.end('Here is our short history');
    }

    res.end(
        `
        <h1>Ooops!</h1>
        <p>We can't find this page</p>
        <a href="/">Home Page</a>
        `);
})

server.listen(5000)