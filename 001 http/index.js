const http = require('http');

const controller = (request, response)=>{
    console.log(request.method);
    response.end('hello');
}

http.createServer(controller).listen(4200);