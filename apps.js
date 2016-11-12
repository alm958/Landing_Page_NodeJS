var http = require('http');
var fs = require('fs');

function loadPage(page, response, code){
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

var server = http.createServer(function (request, response){
    switch (request.url)
    {
        case '/':
            loadPage('index.html', response, 200);
            break;
        case '/ninjas':
            loadPage('ninjas.html', response, 200);
            break;
        case '/dojos/new':
            loadPage('dojos.html', response, 200);
            break;
        default:
            loadPage('error.html', response, 404);
            break;
    };
});

server.listen(6789);
