import React, { Component } from 'react';
import styled from 'styled-components';
import ThemePicker from './parts/ThemePicker';

const BackBtn = styled.button`
  border: none;
  background: transparent;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

const ArrowImg = styled.img`
  height: 35px;
  width: 35px;
`

const Top = styled.div`
    text-align: left;
`


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <Top>
          <BackBtn onClick={this.props.showProfile}><ArrowImg src={require("../../assets/imgs/arrow-left-white.png")}/></BackBtn>
        </Top>
        <h1>Settings</h1>
        <ThemePicker setTheme={this.props.setTheme}/>
      </div>
    );
  }
}

export default Profile;