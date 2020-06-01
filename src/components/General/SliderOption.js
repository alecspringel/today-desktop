import React from 'react';
import styled from 'styled-components'

const Option = styled.button`
  background: ${props => props.active ? '#2079ff' : '#131217'};
  border-radius: 5px;
  border: none;
  color: white;
`

export const SliderOption = (props) => (
  <Option onClick={props.onClick} active={props.active}>{props.label}</Option>
  );