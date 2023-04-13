const http = require("http");

const server = http.createServer((request, response) => {
  console.log("incomming request");
  console.log(
    "REQUEST METHOD:",
    request.method,
    "\n",
    "REQUEST URL:",
    request.url,
    "\n",
    "REQUEST HEADERS:",
    request.headers
  );

  response.end("<h1>Sucess!</h1>");
});
//listen method will spin up a server
server.listen(5000); //local server on your machine
