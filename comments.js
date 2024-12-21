// Create web server 
// Create a web server that listens on port 3000 and serves the comments.html file

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    // if request is for root, send the comments.html file
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});