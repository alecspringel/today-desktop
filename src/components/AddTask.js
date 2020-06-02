import React, { Component } from 'react';
import styled from 'styled-components';
import HoverTextInput from './General/HoverTextInput';

const Container = styled.div`
  background: #2a2a2c;
  margin: 9px;
  height: 80px;
  border-radius: 5px;
  text-align: left;
`


class AddTask extends Component {
  render() {
    return (
      <Container>
        <HoverTextInput 
          type="text"
          name="taskInput"
          onClick={this.props.clearPlaceholder}
          onChange={this.props.handleInputChange}
          value={this.props.taskInput}/>
      </Container>
    );
  }
}

export default AddTask;