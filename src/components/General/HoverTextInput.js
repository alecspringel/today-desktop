import React, { Component } from 'react'
import styled from 'styled-components'

const TaskInput = styled.input`
  background: ${props => props.clicked ? '#353535' : 'none'};
  border: none;
  margin: 9px 19px;
  font-size: 18px;
  color: ${props => props.clicked ? '#a09c9c' : '#565656'};
  width: 60%;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    background: ${props => props.clicked ? '#353535' : '#333333'};
  }
`

class HoverTextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  activate (e) {
    this.setState({ clicked: true })
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render () {
    return (
      <TaskInput type='text' name={this.props.name} onChange={this.props.onChange} onClick={(e) => this.activate(e)} value={this.props.value} clicked={this.state.clicked} />
    )
  }
}

export default HoverTextInput
