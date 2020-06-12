import React, { Component } from 'react'
import styled from 'styled-components'
import CheckBox from './General/Checkbox'

const Container = styled.div`
  background: #1e1e20;
  margin: 9px;
  height: 55px;
  border-radius: 5px;
  text-align: left;
  opacity: ${props => props.checked ? '0.5' : '1'};
  transition: all 150ms;
`

const NameContainer = styled.div`
  border: none;
  margin-top: 14px;
  margin-left: 24px;
  font-size: 18px;
  color: #b8b8b8;
  width: calc(100% - 70px);
  display: inline-block;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`

class TaskItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
    this.check = this.check.bind(this)
  }

  check () {
    this.setState({ checked: !this.state.checked })
    setTimeout(function () {
      if (this.state.checked === true) {
        this.props.removeTask(this.props.task)
      }
    }.bind(this), 1000)
  }

  render () {
    return (
      <Container checked={this.state.checked}><NameContainer checked={this.state.checked}>{this.props.task.name}</NameContainer><CheckBox checked={this.state.checked} onClick={this.check} /></Container>
    )
  }
}

export default TaskItem
