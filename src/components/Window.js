import { Component } from 'react';
import { CONSTANTS, Tabs } from './Data';
import About from './About';
import Experience from './Experience';
import Project from './project/Project';
import Achievements from './Achievements';
import Volunteer from './Volunteer';
import Blog from './Blog';
import Writeup from './Writeup';
import Games from './Games';
import Settings from './Settings';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/window.css';

class TabBody extends Component {
    render() {
        switch (this.props.tab) {
            case Tabs.ABOUT:
                return (
                    <About fullscreen={ this.props.fullscreen } />
                )
            case Tabs.EXPERIENCE:
                return (
                    <Experience fullscreen={ this.props.fullscreen } />
                )
            case Tabs.PROJECT:
                return (
                    <Project fullscreen={ this.props.fullscreen } />
                )
            case Tabs.ACHIEVEMENTS:
                return (
                    <Achievements fullscreen={ this.props.fullscreen } />
                )
            case Tabs.VOLUNTEER:
                return (
                    <Volunteer fullscreen={ this.props.fullscreen } />
                )
            case Tabs.BLOG:
                return (
                    <Blog fullscreen={ this.props.fullscreen } />
                )
            case Tabs.WRITEUP:
                return (
                    <Writeup fullscreen={ this.props.fullscreen } />
                )
            case Tabs.GAME:
                return (
                    <Games fullscreen={ this.props.fullscreen } />
                )
            case Tabs.SETTING:
                return (
                    <Settings fullscreen={ this.props.fullscreen } changeBackground={ this.props.changeBackground } toggleTheme = { this.props.toggleTheme } />
                )
            default:
                console.log("Invalid Tab");
                return <div> Invid tab </div>
        }
    }
}

class Window extends Component {

    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;

    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
    }

    toggleFullScreen = () => {
        if(this.props.tab.zIndex !== CONSTANTS.idxcount){
            CONSTANTS.idxcount += 1;
            this.props.tab.zIndex = CONSTANTS.idxcount;
        }
        this.props.tab.fullscreen = !this.props.tab.fullscreen;
        this.setState({});
    }

    dragMouseDown = (e) => {
        if(this.props.tab.zIndex !== CONSTANTS.idxcount){
            CONSTANTS.idxcount += 1;
            this.props.tab.zIndex = CONSTANTS.idxcount;
            this.setState({});
        }
        e = e || window.event;
        e.preventDefault();
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement;
        document.onmousemove = this.elementDrag;
    };

    elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        this.props.tab.top = this.props.tab.top - (this.pos2/window.innerHeight)*100;
        this.props.tab.left = this.props.tab.left - (this.pos1/window.innerWidth)*100;
        this.setState({});
    }

    closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    render() {
        return (
            <div className="window" id={"window-" + this.props.tab.id} style={{ ...(this.props.tab.fullscreen ? { top: '45%', left: '54%', width: "92%", height: "90%"} : { top: this.props.tab.top + '%', left: this.props.tab.left + '%', width: this.props.tab.short_width + "%", height: this.props.tab.short_height + "%" }), transform: "translate(-50%, -50%)" ,zIndex: this.props.tab.zIndex, opacity: this.props.tab.opacity, ...(CONSTANTS.light ? {backgroundColor: CONSTANTS.LIGHT_BGCOLOR[0] } : {backgroundColor: CONSTANTS.DARK_BGCOLOR[0], color: "#c9d1d9" }) }}>
                <div className="window-header" onMouseDown={ this.dragMouseDown } style={{ ...(CONSTANTS.light ? {backgroundColor: CONSTANTS.LIGHT_BGCOLOR[1] } : {backgroundColor: CONSTANTS.DARK_BGCOLOR[1] }) }}>
                    <div className="window-header-close" onClick={ () => this.props.handleClose(this.props.tab) }>
                        <i className="fas fa-times window-header-close-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-minimize" onClick={ () => ( async () => {
                        // animation
                        const sX = this.props.tab.fullscreen ? 54 : this.props.tab.left;
                        const dX = 50 - ((275 - 50*(this.props.tab.id))/window.innerWidth)*100;
                        const sY = this.props.tab.fullscreen ? 45 : this.props.tab.top;
                        const dY = 100 - (25/window.innerHeight)*100;
                        const dW = 0, dH = 0;
                        const sW = this.props.tab.fullscreen ? 92 : this.props.tab.short_width; 
                        const sH = this.props.tab.fullscreen ? 90 : this.props.tab.short_height;
                        await this.props.handelAnimation(this.props.tab, sX, dX, sY, dY, sW, dW, sH, dH, -1);
                        this.props.handleMinimize(this.props.tab);
                    })() }>
                        <i className="fas fa-window-minimize window-header-minimize-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-maximize" onClick={() => ( async () => {
                        // animation
                        const sX = this.props.tab.fullscreen ? 54 : this.props.tab.left;
                        const dX = this.props.tab.fullscreen ? this.props.tab.left : 54;
                        const sY = this.props.tab.fullscreen ? 45 : this.props.tab.top;
                        const dY = this.props.tab.fullscreen ? this.props.tab.top : 45;
                        const dW = this.props.tab.fullscreen ? this.props.tab.short_width : 92;
                        const dH = this.props.tab.fullscreen ? this.props.tab.short_height : 90;
                        const sW = this.props.tab.fullscreen ? 92 : this.props.tab.short_width; 
                        const sH = this.props.tab.fullscreen ? 90 : this.props.tab.short_height;
                        await this.props.handelAnimation(this.props.tab, sX, dX, sY, dY, sW, dW, sH, dH, 0);
                        this.toggleFullScreen();
                    })() }>
                        <i className="fas fa-plus  window-header-maximize-icon"></i>
                    </div>
                    <div className="window-header-title">{this.props.tab.title}</div>
                </div>
                {/* Body of each tab */}
                <TabBody tab={ this.props.tab } fullscreen={ this.props.tab.fullscreen } changeBackground={this.props.changeBackground } toggleTheme = { this.props.toggleTheme } />
            </div>
        )       
    }
}

export default Window;