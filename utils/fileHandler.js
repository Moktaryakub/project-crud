const fs = require('fs');
const path = require('path');
const filepath='./data/task.json';
exports.writeTasktoFile =(tasks)=>{
    fs.writeFilesync(filepath,JSON.stringify(tasks, null ,2,))
    


}

exports.readTasksFromFile = ()=>{
    if(!fs.existsSync(filepath)){
        writeTasktoFile([])
    }
    const data = fs.readFileSync(filepath);
    return JSON.parse(data); 
}
