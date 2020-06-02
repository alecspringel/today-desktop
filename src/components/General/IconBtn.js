import React from 'react';
import styled from 'styled-components';

const Addbutton = styled.button`
  background: #FD2D55;
  position: ${props => props.relative ? 'relative' : 'absolute' };
  right: 0;
  border-radius: 5px;
  text-align: center;
  border: none;
  font-size: 13.333px;
  color: white;
  background: ${props => props.color || props.theme.primary};
  padding: 0 10px;
  height: 30px;
  margin: ${props => props.margin};
`

const PlusImg = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;
`

//@props.onClick = function()
//@props.color = (string: hex/rgb etc..) background color

const IconBtn = function(props) {
  if(props.img === "plus") { var path = require("../../assets/imgs/plus-white.png"); }
  if(props.img === "check") { var path = require("../../assets/imgs/checkmark-white.png"); }
  if(props.img === "x") { var path = require("../../assets/imgs/x-white.png"); }
  return <Addbutton onClick={props.onClick} color={props.color} margin={props.margin} relative={props.relative}>
      <PlusImg src={path}></PlusImg>{props.label}
    </Addbutton>
};

export default IconBtn;