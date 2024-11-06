const taskroot = (req,resizeBy) => {
    if (req.method ==='get'){
        getTasks(req,res);
    }else if (req.method ==='post'){
        createTasks(req,res);
    }else if (req.method ==='patch'){
        updatetaTasks(req,res);
    }else if (req.method ==='DELETE'){
        deleteTask(req,res);
    }else{
        res.writeheader(404, 'Not Found',{  })
    }
}