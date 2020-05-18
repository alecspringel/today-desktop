import React, { Component } from 'react';
const { ipcRenderer } = require('electron');

class Sidebar extends Component {
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

    render() {
        return (
            <div id="main" className={this.state.show ? "" : "hidden"}>
                <h1>hi</h1>
            </div>
        );
    }
}

export default Sidebar;