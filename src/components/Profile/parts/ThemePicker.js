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
      var primary = this.props.theme.primary
    }

    return (<>
        <Container width={'auto'} content={<>
          <Color color={"#2079ff"} onClick={() => this.props.setTheme("#2079ff")}/>
          <Color color={"#20c1ff"} onClick={() => this.props.setTheme("#20c1ff")}/>
          <Color color={"#54c011"} onClick={() => this.props.setTheme("#54c011")}/>
          <Color color={"#ccbd07"} onClick={() => this.props.setTheme("#ccbd07")}/>
          <Color color={"#cc7407"} onClick={() => this.props.setTheme("#cc7407")}/>
          <Color color={"#cc4707"} onClick={() => this.props.setTheme("#cc4707")}/>
          <Color color={"#cc2b07"} onClick={() => this.props.setTheme("#cc2b07")}/>
          <Color color={"#b81b63"} onClick={() => this.props.setTheme("#b81b63")}/>
          <Color color={"#9e06c4"} onClick={() => this.props.setTheme("#9e06c4")}/>
        </>}>
        </Container>
        <div style={{margin: 18}}>
          <IconBtn label="Try me" img="check" color={primary} relative={true}/>
        </div>
        </>);
  }
}

export default ThemePicker;