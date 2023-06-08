const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString)
// Same output

// Host (root domain)
console.log(myUrl.host)

// Hostname (doesn't give port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)
// '/hello.html'

// Serialized query
console.log(myUrl.search)
// '?id=100&status=active'

// Parameters objects
console.log(myUrl.searchParams)
// Gives object with the values of the id, status etc above

// Add parameters
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
// Also gives the appended parameters

// Loop through the parameters
myUrl.searchParams.forEach((val, name) => console.log(`${name}: ${val}`))
