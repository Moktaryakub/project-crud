const http = require("http");
const taskroot = require('./routes/taskroot');
const HOSTNAME = "localhost";
const port = 6000;

const server = http.createServer((req, res) => {
    if (req.url.startsWith(`/tasks`)) {
        // Wac taskroot oo sii req iyo res
        taskroot(req, res);
    } else {
        // Qorka saxda ah ee writeHead
        res.writeHead(404, "Not Found", {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'Sorry, you got lost'
        }));
    }
});

server.listen(port, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${port}/`);
});
