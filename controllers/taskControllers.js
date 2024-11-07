const {IncomingForm} = require('formidable');
const {readTasksFromFile}=require("../utils/fileHandler")
const {copyfilesync}=require
exports.getTasks =(res,req)=>{
    const tasks = readTasksFromFile();

    res.writeheader(200,{'content-type': 'application/json'});
    res.end(JSON.stringify(tasks));

}

exports.createTasks =(res,req)=>{
    const form = new IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err) {
            res.writeheader(400,{'content-type':  'application/json',})
            res.end(JSON.stringify({
                message: 'error parsing form'

            }));
            return;
        }
        const tasks = readTasksFromFile()
        const newTask = {
            id: Data.now(),
            title: fields.title,
            description: fields.description,
            status: fields?.status || 'pending',
            image: files.image?`/uploads/${files.image.name}`:null,
        }
        tasks.push(newTask);
        writeTasksToFile(tasks);

        if (files.image) {
            copyfilesync(files.image.path,path.joi(__dirname, '../uploads',files.image.name));

            res.end(JSON.stringify(newtasks));
        }

    })
}

exports.updateTasks =(res,req)=>{
    resend(JSON.stringify({
        message: "non yet implemented tasks updated"
    }
    ));
}
exports.delettask =(res,)=>{
    res.end(JSON.stringify({
        message:"non yet implemented tasks"}));
}