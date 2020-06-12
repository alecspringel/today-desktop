import React from 'react'
import styled from 'styled-components'
import IconBtn from './General/IconBtn'

const Header = styled.div`
  background: #191A1F;
  font-weight: bold;
  text-align: left;
  width: 90%;
  margin: 0 5px;
  position: relative;
  display: inline-block;
  padding: 10px 0;
`

const Label = styled.label`
  margin-left: 30px;
`

const ActionDiv = styled.div`
  float: right;
`

const TEHeader = (props) => (
  <Header>
    <Label>Task</Label>
    <ActionDiv>
      {!props.adding
        ? <IconBtn label='Add Task' onClick={props.toggleTask} img={require('../assets/imgs/plus-white.png')} />
        : <>
          <IconBtn label='Cancel' onClick={props.toggleTask} img={require('../assets/imgs/x-white.png')} color='#FD2D55' margin='0 85px' />
          <IconBtn label='Create' onClick={props.createTask} img={require('../assets/imgs/checkmark-white.png')} color='#06ae53' />
        </>}
    </ActionDiv>
  </Header>
)

export default TEHeader
