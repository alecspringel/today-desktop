import React, { Component } from 'react';
import TaskItem from './TaskItem';


class TaskList extends Component {
  render() {
    return (
      <>
        {this.props.taskList && this.props.taskList.map((task) => 
          <TaskItem key={task._id} task={task} removeTask={this.props.removeTask}/>
        )}
      </>
    );
  }
}

export default TaskList;