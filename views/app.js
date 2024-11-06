const http= require("http");
const taskroot= require('./routes/taskroot');
const HOSTNAME ="localhost";
const server = http.createServer( (req, res) => {
    if (req.url.startswith(`/tasks`)) {
        taskroot (req,url)
    } else{
        res.writeheader(404, "Not Found",{'Content-Type':   'application/json'       })
        res.end(JSON.stringify({   
            massage :'sorry,you got lost'
        }))
    }
});
server.listen(port,HOSTNAME,()=>{
    console.log(`Server running at http://${HOSTNAME}:${port}/`);
});