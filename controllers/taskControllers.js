const {IncomingForm} = require('formidable');
const {readTasksFromFile}=require("../utils/fileHandler")

exports.getTasks =(res,req)=>{
    const tasks = readTasksFromFile();

    res.writeheader(200,{'content-type': 'application/json'});
    res.end(JSON.stringify(tasks));

}

exports.createTasks =(res,req)=>{
    const form = new IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err) {
            res.writeheader(400,{'content-type': 'application/json',})
            res.end(JSON.stringify({
                message: 'error parsing form'

            }));
            return;
        }
    })


}