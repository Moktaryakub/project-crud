const fs = require('fs');
const path = require('path');
const filepath='./data/task.json';
const writeTasktoFile =(tasks)=>{
    fs.writeFilesync(filepath,JSON.stringify(tasks,))
    


}

const readTasksFromFile = ()=>{
    if(!fs.existsSync(filepath)){
        writeTasktoFile([])
    }
    const data = fs.readFileSync(filepath);
    return JSON.parse(data); 
}
