const { getTasks } = require("../controllers/taskControllers");


const taskroot = (req,resizeBy) => {
    if (req.method ==='get'){
        getTaskstTasks(req,res);
    }else if (req.method ==='post'){
        createTasks(req,res);
    }else if (req.method ==='patch'){
        updatetaTasks(req,res);
    }else if (req.method ==='DELETE'){
        deleteTask(req,res);
    }else{
        res.writeheader(404, 'Not Found',{ "content-type":"application/json" })
        res.end(JSON.stringify({
            massage:"unknuown method require "
        }))
    }
}
module.exports =taskroot;