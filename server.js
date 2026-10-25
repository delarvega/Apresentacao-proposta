const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/Thiago Vega/Documents/Programas App/Apresentação proposta';
const mime = {'.html':'text/html; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.gif':'image/gif','.mp4':'video/mp4','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.ico':'image/x-icon'};
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(dir, url === '/' ? 'index.html' : url);
  fs.readFile(fp, (e, d) => {
    if (e) { res.writeHead(404); res.end('Not found: ' + fp); return; }
    res.writeHead(200, {'Content-Type': mime[path.extname(fp)] || 'application/octet-stream'});
    res.end(d);
  });
}).listen(50896, () => console.log('Server running on http://127.0.0.1:50896'));
