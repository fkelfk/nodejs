const url = require('url');

const URL = url.URL;
const myURL = new URL('https://github.com/fkelfk');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-----------------------------')
const parsedUrl = url.parse('https://github.com/fkelfk')
console.log('url.parse():', parsedUrl);