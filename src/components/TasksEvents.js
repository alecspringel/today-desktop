import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from './General/Slider'
import TaskList from './TaskList'
import TEHeader from './TEHeader';
import AddTask from './AddTask';
import { Task } from '../database/taskDB'
const  USER_DB = require('electron').remote.getGlobal('USER_DB');

const TaskEventContainer = styled.div`
  display: inline-block;
  text-align: center;
  height: 70%;
  width: 90%;
  margin: 0 5px;
  background: ${ props => props.theme.container || '#131217' };
  border-radius: 5px;
  overflow-y: scroll;
`

const SliderContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin: 5px;
`

class TasksEvents extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskList: [],
      addTask: false,
      taskInput: "What would you like to accomplish?",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.clearPlaceholder = this.clearPlaceholder.bind(this)
    this.toggleTask = this.toggleTask.bind(this)
    this.createTask = this.createTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  componentDidMount(){
    USER_DB.find({}, function(err, docs){
      if(docs !== null){
        this.setState({taskList: docs})
      }
    }.bind(this))
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  clearPlaceholder(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: ""
    });
  }

  show(show) {
    this.setState({ show });
  }

  toggleTask() {
    this.setState({ 
      addTask: !this.state.addTask,
      taskInput: "What would you like to accomplish?",
    });
  }

  createTask() {
    if(this.state.taskInput.length !== 0) {
      var task = new Task(this.state.taskInput);
      USER_DB.insert(task, function(err, newDoc) {
        if(newDoc !== null) {
          this.setState({
            addTask: false,
            taskList: [newDoc, ...this.state.taskList]})
        }
      }.bind(this));
    }
    console.log(this.state.taskList)
  }

  removeTask(task){
    console.log(task)
    var taskList = this.state.taskList
    var updated = taskList.filter((doc) => doc !== task)
    this.setState({
      taskList: updated
    })
  }
  

  render() {
    var sliderOptions = [{label: "Tasks", onClick: () => this.show("Tasks")}, {label: "Events", onClick: () => this.show("Events")}];
    return (
      <>
        <SliderContainer>
          <Slider width={'410px'} grid={'50% 50%'} options={sliderOptions} default={0}/>
        </SliderContainer>
        <TEHeader toggleTask={this.toggleTask} adding={this.state.addTask} createTask={this.createTask}/>
        <TaskEventContainer>
          { this.state.addTask &&
            <AddTask taskInput={this.state.taskInput} handleInputChange={this.handleInputChange} clearPlaceholder={this.clearPlaceholder}/>
          }
          <TaskList taskList={this.state.taskList} removeTask={this.removeTask}/>
        </TaskEventContainer>
      </>
    );
  }
}

export default TasksEvents;