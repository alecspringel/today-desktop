import React, { Component } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import TasksEvents from './TasksEvents'
import Profile from './Profile/Profile'
const { ipcRenderer } = require('electron')

const MainPanel = styled.div`
  background: #191A1F;
  border: 1px solid var(--tray-border);
  border-width: 1px 0px 0px 1px;
  color: white;
  font-family: 'Segoe UI';
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px 15px 0 15px;
  bottom: 0;
  left: 0;
  opacity: 0.98;
  transition: opacity 0.2s, transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), background-color 0.2s, border-color 0.2s, color 0.2s;
  ${props => !props.show && css`
  transform: translateX(100%);
  `};
  ${props => props.showProfile && css`
    transform: translateX(-100%);
  `};
`

const SettingsBtn = styled.button`
  border: none;
  background: transparent;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

const CogWheelImg = styled.img`
  height: 35px;
  width: 35px;
`

const ProfilePanel = styled.div`
  position: absolute;
  background: #191A1F;
  border: 1px solid var(--tray-border);
  border-width: 1px 0px 0px 1px;
  color: white;
  font-family: 'Segoe UI';
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px 15px 0 15px;
  bottom: 0;
  left: 0;
  opacity: 0.98;
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  ${props => !props.showProfile && css`
  transform: translateX(100%);
  `};
`

const Top = styled.div`
  text-align: right;
`

export default class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      themePrimary: '#2079ff'
    }
    this.setTheme = this.setTheme.bind(this)
    this.animateOpen = this.animateOpen.bind(this)
    this.animateClose = this.animateClose.bind(this)
    this.showProfile = this.showProfile.bind(this)
  }

  showProfile () {
    console.log('show profile')
    this.setState({ showProfile: !this.state.showProfile })
  }

  setTheme (color) {
    console.log(color)
    this.setState({ themePrimary: color })
  }

  animateOpen () {
    this.setState({ show: true })
    console.log('animate')
  }

  animateClose () {
    this.setState({ show: false, showProfile: false })
    console.log('close')
  }

  componentDidMount () {
    ipcRenderer.on('animate-open', this.animateOpen)
    ipcRenderer.on('animate-close', this.animateClose)
  }

  test () {
    console.log('test')
  }

  render () {
    const theme = {
      primary: this.state.themePrimary,
      container: '#131217'
    }

    return (
      <ThemeProvider theme={theme}>
        <MainPanel show={this.state.show} showProfile={this.state.showProfile}>
          <Top><SettingsBtn onClick={this.showProfile}><CogWheelImg src={require('../assets/imgs/cogwheel-white.png')} /></SettingsBtn></Top>
          <h1>Hi Alec</h1>
          <TasksEvents />
        </MainPanel>
        <ProfilePanel showProfile={this.state.showProfile}>
          <Profile setTheme={this.setTheme} showProfile={this.showProfile} />
        </ProfilePanel>

      </ThemeProvider>
    )
  }
}
