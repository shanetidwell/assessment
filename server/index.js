const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const taskController = require('./controllers/taskController')

const port = 4000;

app.use(bodyParser.json())
app.use(cors());

app.get('/api/tasks', taskController.read)
app.post('/api/tasks', taskController.create)
app.put('/api/tasks/:id',taskController.update)
app.delete('/api/tasks/:id',taskController.delete)




app.listen(port, ()=>{
    console.log("listening on port", port)
})