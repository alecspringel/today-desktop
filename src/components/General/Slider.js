import React, { Component } from 'react'
import styled from 'styled-components'
import { SliderOption } from './SliderOption'

const Container = styled.div`
  height: 30px;
  padding: 5px;
  background: ${props => props.theme.container || '#131217'};
  border-radius: 5px;
  width: ${props => props.width};
  display: grid;
  grid-template-columns: ${props => props.grid};
`
// @props.width = width of container
// @props.grid = % width of each option
// @props.options = {label: "text", onClick: function()}
// @props.default = int in range of options.length -> sets default selected

class Slider extends Component {
  constructor (props) {
    super(props)
    var selected = this.props.default || 0
    this.state = { active: this.props.options[selected].label }
    this.props.options[selected].onClick()
    this.activate = this.activate.bind(this)
  }

  activate (option) {
    this.setState({ active: option.label })
    option.onClick()
  }

  render () {
    return (
      <Container width={this.props.width} grid={this.props.grid}>
        {this.props.options.map(function (option) {
          return (
            <SliderOption
              label={option.label}
              onClick={() => this.activate(option)}
              active={this.state.active === option.label}
            />
          )
        }.bind(this))}
      </Container>
    )
  }
}

export default Slider
