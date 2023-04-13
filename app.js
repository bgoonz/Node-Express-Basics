const express = require("express"); //this is a function that returns an object

const app = express(); //this is an object

app.use((req, res, next) => {
  let body = "";
  //req.on is a listener
  req.on("end", () => {
    const userName = body.split("=")[1];
    if (userName) {
      req.body = { name: userName };
    }
    next(); //call next in the end handler bc we want to wait until we have the full body.
  });
  req.on("data", (chunk) => {
    body += chunk;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    "<form method='post'><input type='text' name='username'></input><button type='submit'>Create User</button</form>"
  );
});

app.listen(5000);
