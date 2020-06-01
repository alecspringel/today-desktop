import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from './General/Slider'
import { SliderOption } from './General/SliderOption';

const TaskEventContainer = styled.div`
  display: inline-block;
  text-align: center;
  height: 70%;
  width: 90%;
  margin: 40px 5px;
  background: #131217;
  border-radius: 5px;
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
    }
  }

  show(show) {
    this.setState({ show })
  }

  render() {
    var sliderOptions = [{label: "Tasks", onClick: () => this.show("Tasks")}, {label: "Events", onClick: () => this.show("Events")}];
    return (
      <>
        <SliderContainer>
          <Slider width={'410px'} grid={'50% 50%'} options={sliderOptions} default={0}/>
        </SliderContainer>
        <TaskEventContainer>

        </TaskEventContainer>
      </>
    );
  }
}

export default TasksEvents;