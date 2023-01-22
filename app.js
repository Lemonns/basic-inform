const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(err);
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    })
  } 
  else if (req.url === '/about') {
      fs.readFile('about.html', (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(err);
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
      })
  } 
  else if (req.url === '/contact-me') {
    fs.readFile('contact-me.html', (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(err);
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
    }) 
  } 
  else {
    fs.readFile('404.html', (data, err) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(err);
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.writeHead(data);
        return res.end;
    })
  }
})

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));