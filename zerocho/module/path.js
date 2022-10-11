const path = require('path')

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));
console.log(path.parse(__filename));
console.log(path.format({
    root: '/',
    dir: '/Users/atesi/Documents/node/zerocho/node',
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }));
console.log(path.normalize('/Users/atesi/Documents/node/zerocho/node'));
console.log(path.isAbsolute('./'));
console.log(path.isAbsolute('/'));
console.log(path.relative('/Users/atesi/Documents/node/zerocho/node','/'));
console.log(path.join(__dirname, '..','..','/zerocho','.','node'))
console.log(path.resolve(__dirname, '..','..','/zerocho','.','node'))
