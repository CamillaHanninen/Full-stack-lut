const path = require('path')

// Base file name
console.log(path.basename(__filename))
// path_demo.js

// Directory name
console.log(path.dirname(__filename))
// /Users/.../Coursework/Nodejs/reference
// Or use just __dirname

// File extension
console.log(path.extname(__filename))
// .js

// Create path object
console.log(path.parse(__filename).base)
// path-demo.js

// Concatenate paths (../test/hello.html)
console.log(path.join(__dirname, 'test', 'hello.html'))
// /Users/.../Coursework/Nodejs/reference/test/hello.html
