# Node-Express-Basics


##### What is Node.js?
- A host enviorment (runtime) for executing JavaScript code
- V8 engine from Chrome is used for node but it adds some apis (like file system) to it and removes some apis (like DOM).


**File System API**

- **fs.writeFile()** _is an asynchronous function_
  - Takes the name of the file we wish to write to as the first argument, the data we wish to write as the second argument, and a callback function as the third argument which takes an error object as an argument which is null if no error occurs.

>Ex.
```javascript
const fs = require('fs');

const userName = 'Bryan';

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('WROTE FILE');
});


```


**HTTP Module**
- **http.createServer()** _is a function that creates a new server_
  - Takes a callback function as an argument which takes two arguments, a request object and a response object.
  - The request object contains information about the incoming request, such as the url, headers, etc.
  - The response object contains methods for sending a response back to the client, such as write() and end().


**For the following code**
```javascript
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

  response.end("Sucess!");
});
//listen method will spin up a server
server.listen(5000); //local server on your machine

```

- When we open the browser to localhost:5000, we will see the response "Sucess!" in the browser

and the following in the terminal

```
incomming request
REQUEST METHOD: GET
 REQUEST URL: /
 REQUEST HEADERS: {
  host: 'localhost:5000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  dnt: '1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9'
}
incomming request
REQUEST METHOD: GET
 REQUEST URL: /favicon.ico
 REQUEST HEADERS: {
  host: 'localhost:5000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
  dnt: '1',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
  'sec-ch-ua-platform': '"Windows"',
  accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-dest': 'image',
  referer: 'http://localhost:5000/',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9'
}
```


**NOTE: when you change your code you need to restart the server to see the changes in the browser!!!**
