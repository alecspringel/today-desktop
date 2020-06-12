import React from 'react'
import styled from 'styled-components'

const Addbutton = styled.button`
  background: #FD2D55;
  border-radius: 5px;
  text-align: center;
  border: none;
  font-size: 13.3px;
  color: white;
  background: ${props => props.color || props.theme.primary};
  padding: 0 10px;
  height: 30px;
`

const PlusImg = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;
`

// @props.onClick = function()
// @props.color = (string: hex/rgb etc..) background color

const IconBtn = function (props) {
  return (
    <Addbutton onClick={props.onClick} color={props.color}>
      <PlusImg src={props.img} />{props.label}
    </Addbutton>
  )
}

export default IconBtn
