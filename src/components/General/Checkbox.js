import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  border: ${props => props.checked ? props.theme.primary || '#2079ff' : '#F0F0F0'};
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? props.theme.primary || '#2079ff' : '#F0F0F0'};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export default function Checkbox ({ className, checked, onClick }) {
  return (
    <CheckboxContainer className={className} onClick={onClick}>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>)
}
