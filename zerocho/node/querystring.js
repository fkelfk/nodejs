const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/unit/14388?category=questionDetail&tab=curriculum');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));