const http = require("http");

const server = http.createServer((request, response) => {
  console.log("incomming request");
  console.log("REQUEST METHOD:", request.method, "\n");
    if ( request.method === 'POST' ) {
        let body = '';
        request.on( 'end', () => { 
            const userName = body.split('=')[1];
            response.end('<h1>'+ userName +'</h1>')
        } )
        request.on( 'data', ( chunk ) => {
            body += chunk;
        });
    
    } else {
          response.setHeader("Content-Type", "text/html");
          response.end(
            "<form method='post'><input type='text' name='username'></input><button type='submit'>Create User</button</form>"
          );
    }

});
//listen method will spin up a server
server.listen(5000); //local server on your machine
