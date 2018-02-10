tasks = [];
id = 0;

module.exports = {
    create: (req,res)=>{
        let newTask = req.body;
        newTask.id = id;
        id = id +1;
        tasks.push(newTask);
        res.send(tasks);
    },
    read: (req,res)=>{
        res.send(tasks);
    },
    update: (req,res)=>{
        for(var i = 0; i < tasks.length; i++){
            if (tasks[i].id===Number(req.params.id)){
                updatedTask = Object.assign({},tasks[i], req.body)
                tasks.splice(i,1,updatedTask)
            }
        }
        res.send(tasks);
    },
    delete: (req,res)=>{
        for(var i = 0; i < tasks.length; i++){
            if (tasks[i].id===Number(req.params.id)){
                tasks.splice(i,1)
            }
        }
        res.send(tasks);
    },
}