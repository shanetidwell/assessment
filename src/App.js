import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import TaskList from './components/TaskList'

const baseUrl = 'http://localhost:4000';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      newTask: ""
    }
  }
  componentDidMount = () =>{
    axios({
      method: "GET",
      url: baseUrl + "/api/tasks"
    }).then((response)=>{
      console.log(response);
      this.setState({tasks: response.data});
      console.log(this.state.tasks);     
    }).catch(console.log)
  }

  inputBoxChange = (taskName)=>{
    this.setState({newTask: taskName})
  }

  addTask = ()=>{
    let taskToAdd = {
      task: this.state.newTask
    }
    this.setState({newTask: ""})
    axios({
      method: "POST",
      url: baseUrl + '/api/tasks',
      data: taskToAdd
    }).then((response)=>{
      console.log(1111,response)
      this.setState({tasks: response.data})
      console.log(2222, this.state.tasks)
    }).catch(console.log)
  }

  deleteTask = (id)=>{
    axios({
      method: "DELETE",
      url: baseUrl + `/api/tasks/${id}`
    }).then((response)=>{
      console.log(3333,response);
      this.setState({tasks: response.data})
    }).catch(console.log)
  }

  edit = (id, editedTask) =>{
    let body = {
      task: editedTask
    }
    console.log("id", id)
    console.log("newTask", body)
    axios({
      method: "PUT",
      url: baseUrl + `/api/tasks/${id}`,
      data: body
    }).then((response)=>{
      console.log("editttttt", response)
      this.setState({tasks:response.data})
    }).catch(console.log)
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>

        <div className="Content">

            <div className="add-task">
              <input type="text"  onChange={(e)=>this.inputBoxChange(e.target.value)} value={this.state.newTask}></input>
              <button onClick={()=>this.addTask()}>Add</button>
            </div>

            <div className="task-container">
              {this.state.tasks.map((task, index )=>{
                return( <div><TaskList task={task} deleteTask={this.deleteTask} edit={this.edit}/></div>)
              })
              }
            </div>

        </div>
      </div>
    );
  }
}

export default App;
