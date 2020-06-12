import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  display: inline-block;
  padding: 5px;
  background: ${props => props.theme.container || '#131217'};
  border-radius: 5px;
  width: ${props => props.width};
`

function Container (props) {
  return (
    <Background>
      {props.content}
    </Background>
  )
}

export default Container
