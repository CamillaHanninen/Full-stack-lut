const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//  if(err) throw err;
//    console.log('Folder created');
//});

// Create and write to a file (clatest can overwrite files)
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello !',
  err => {
    if(err) throw err;
    console.log('File written to');
    
    // Appends to a file
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      '<3 Node.js,
      err => {
        if(err) throw err;
        console.log('File written to');
      }
    );
  }
);

// Appends to a file
//fs.appendFile( ..
