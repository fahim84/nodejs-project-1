const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'text/html'});

    const url = request.url;

    if(url ==='/') {
        response.write(' Welcome to NodeJS Assignment 1 - Fahim Ahmed - 20818');
        response.end();
    }
    else if(url ==='/readfile') {
        fs.readFile('reading-test.txt', function(err, data) {
            response.write(data);
            return response.end();
        });
    }
    else {
        response.write('Tum pagal ho');
        response.end();
    }

});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
