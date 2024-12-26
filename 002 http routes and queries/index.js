const http = require('http');

http.createServer((req, res)=>{
    console.log(req.method);
    console.log(req.url);

    if(req.method === 'GET' && req.url === '/users') return res.end('userlist');
    if(req.method === 'GET' && req.url === '/products') return res.end('product list')
    
    res.end('invalid method or route');
}).listen(4000, ()=>{
    console.log('server is running on port 4000');
});