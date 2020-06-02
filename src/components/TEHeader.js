import React from 'react';
import styled from 'styled-components'
import IconBtn from './General/IconBtn';

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

const TEHeader = (props) => (
    <Header>
      <Label>Task</Label>
      { !props.adding 
        ? <IconBtn label="Add Task" onClick={props.toggleTask} img={"plus"}/>
        : <><IconBtn label="Create" onClick={props.createTask} img={"check"} color='#06ae53'/> 
        <IconBtn label="Cancel" onClick={props.toggleTask} img={"x"} color='#FD2D55' margin={"0 85px"}/></>
      }
    </Header>
  );

export default TEHeader;