const http = require('http');
const fs = require('fs')
const url = require('url');
const qs = require('querystring');


const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const server = http.createServer((req, res) => {
    console.log(parseCookies(req.headers.cookie));
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login?name=hi')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, { 
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expries=${expires.toGMTString()}; httpOnly; Path=/`});
        console.log(name);
        res.end();
    } else if (cookies.name) {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        fs.readFile('./server4.html', (err, data) => {
            res.end(data);
        })
    }
}).listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});