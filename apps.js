var http = require('http');
var fs = require('fs');

function loadPage(page){
    console.log(page);
    console.log(typeof(page));
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    switch (request.url)
    {
        case '/':
            loadPage('index.html');
            // fs.readFile('index.html', 'utf8', function (errors, contents){
            //     response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            //     response.write(contents);  //  send response body
            //     response.end(); // finished!
            // });
            break;
        case '/ninjas':
            fs.readFile('ninjas.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
                response.write(contents);  //  send response body
                response.end(); // finished!
            });
            break;
        case '/dojos/new':
            fs.readFile('dojos.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
                response.write(contents);  //  send response body
                response.end(); // finished!
            });
            break;
        default:
            fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
            });
            break;
    };
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
