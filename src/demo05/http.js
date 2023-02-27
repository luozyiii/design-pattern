const http = require('http');

function serverCallback(req, res) {
  console.log('get 请求不处理', req.url);
  res.end('hello');
}

http.createServer(serverCallback).listen(8081);
console.log('监听 8081 端口...');
