var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i= i + 1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.id === undefined){
    
    // if(_url == '/'){
    //   title='Welcome';
    // }

    // if(_url == '/favicon.ico'){
    //   return response.writeHead(404);
    // }

    // response.writeHead(200);
    // response.end(fs.readFileSync(__dirname + url));
        // fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){

          fs.readdir('./data', function(error, filelist){
            var title = 'Welcome';
            var description = 'Hello Node.js';
            /*
            var list = `<ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>`;
            */
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200); 
            response.end(template);
            })
        // });
      } else{
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello Node.js';
          var list = templateList(filelist);
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
          var title = queryData.id
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200); 
            response.end(template);
        });  
      });
    }
  } else {
    response.writeHead(404);
    response.end('NOT FOUND');
  }
});
app.listen(3000);