import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../../General/Container';
import IconBtn from '../../General/IconBtn';

const Color = styled.button`
  background: ${props => props.color};
  border: none;
  height: 25px;
  width: 25px;
  margin: 5px;
  border-radius: 5px;
`

class ThemePicker extends Component {
  render() {
    if (this.props.theme){
      var Primary = this.props.theme.primary
    }
    return (<>
        <Container width={'auto'} content={<>
          <Color color={"#2079ff"} onClick={() => this.props.setTheme("#2079ff")}/>
          <Color color={"#adad00"} onClick={() => this.props.setTheme("#adad00")}/>
        </>}>
        </Container>
        <div>
          <IconBtn label="Try me" img="check" color={Primary} relative={true}/>
        </div>
        </>);
  }
}

export default ThemePicker;