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
