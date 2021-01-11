const http = require('http');
const fs = require('fs');                                              //!<--Calling Core Methods.

const server = http.createServer((request, response) => {              //!<--Creating a local server.

    console.log('Request was made ' + request.url)                     //?When a request is made logging what that request was.
    response.writeHead(200, { 'Content-Type': 'text/plain' });         //?Setting some response headers.

    let myObj = {
        Name: 'Lewes',
        Job: 'Bum',
        Age: 31
    };

    let oops = 'Oops there is an error!'

    //*
    if (request.url === '/keyboard') {
        fs.createReadStream(__dirname + '/keyboard.txt').pipe(response);
    }
    else if (request.url === '/') {
        response.end(JSON.stringify(myObj));
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(JSON.stringify(oops));
    }
    //* 

    //Piping (Used normally for one response and not multiple)

    //?Print keyboard
    // const myReadStream = fs.createReadStream(__dirname + '/keyboard.txt', 'utf8');
    // myReadStream.pipe(response);

    //?Print data
    // const myData = fs.createReadStream(response.end(JSON.stringify(myObj)));
    // myData.pipe(response);

    //?'Piping' (easier than 'Streaming') the response data to the...... response.

})

server.listen(3000, '127.0.0.1');
console.log('You are now listing to port 3000!');