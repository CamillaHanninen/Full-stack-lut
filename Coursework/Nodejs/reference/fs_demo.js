const fs = require('fs')
const path = require('path')

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//  if(err) throw err;
//    console.log('Folder created');
// });

// Create and write to a file (clatest can overwrite files)
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello !',
//   err => {
//     if(err) throw err;
//     console.log('File written to');
//
// Appends to a file
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       '<3 Node.js,
//       err => {
//         if(err) throw err;
//         console.log('File written to');
//       }
//     );
//   }
// );

// Reads a file
// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   (err, data) => {
//     if(err) throw err;
//     console.log(data);
//   });
// Prints 'Hello ! <3 Node.js' from hello.txt
//
// Renames a file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'newHello.txt'),
  (err) => {
    if (err) throw err
    console.log('File renamed')
  }
)
