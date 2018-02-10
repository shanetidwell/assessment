import React, { Component } from 'react';
import axios from 'axios'


const baseUrl = 'http://localhost4000';


class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: this.props.task.task,
      id: this.props.task.id,
      edit: false,
      editedTask: ""
    //   lineThrough: "optional-box"
    }
  }
  editTask = () =>{
      console.log('edit task')
      this.setState({edit: false})
      this.state.edit ? this.setState({edit:false}) : this.setState({edit: true})
      this.props.edit(this.props.task.id, this.state.editedTask);
  }
  
  render() {
    return (
        <div className="task">
            <div className="button-and-task">
            <button className="delete-button" onClick={()=>this.props.deleteTask(this.props.task.id)}></button>
            {/* <button className="delete-button"  onClick={()=>this.setState({lineThrough: "task-name optional-box"})}>delete</button> */}
                

                {!this.state.edit?(
                <div className={this.state.lineThrough}>{this.props.task.task}</div>
                ):<input type="text optional-box" placeholder={this.props.task.task} onChange={(e)=>this.setState({editedTask: e.target.value})}/>
                }
            </div>
                {!this.state.edit?(
                    <button className="edit-button" onClick={()=>this.setState({edit:true})}>Edit</button>
                    ):<button className = "submit-button"  onClick={()=>this.editTask()}>Submit</button>
                }
                
        </div>

      
    );
  }
  
}


export default TaskList;
