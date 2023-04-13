const fs = require('fs');

const userName = 'Bryan';

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('WROTE FILE');
});
