import React, { Component } from 'react';
import styled, {css} from 'styled-components'
import TasksEvents from './TasksEvents';
const { ipcRenderer } = require('electron');

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
    opacity: 0.95;
    transition: opacity 0.2s, transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), background-color 0.2s, border-color 0.2s, color 0.2s;
    ${ props => !props.show && css`
    transform: translateX(100%);
  `};
`


export default class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.animateOpen = this.animateOpen.bind(this)
        this.animateClose = this.animateClose.bind(this)
    }

    animateOpen() {
        this.setState({show: true})
        console.log("animate")
    }

    animateClose() {
        this.setState({show: false})
        console.log("close")
    }

    componentDidMount() {
        ipcRenderer.on('animate-open', this.animateOpen)
        ipcRenderer.on('animate-close', this.animateClose)
    }

    test(){
        console.log("test")
    }

    render() {
        return (
            <MainPanel show={this.state.show}>
                <h1>Hi Alec</h1>
                <TasksEvents/>
            </MainPanel>
        );
    }
}
