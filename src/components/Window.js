import { Component } from 'react';
import { CONSTANTS, Tabs } from './Tabs';
import About from './About';
import Project from './Project';
import Blog from './Blog';
import Writeup from './Writeup';
import Games from './Games';
import Settings from './Settings';
import Trash from './Trash';

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
            case Tabs.PROJECT:
                return (
                    <Project fullscreen={ this.props.fullscreen } />
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
                    <Settings fullscreen={ this.props.fullscreen } />
                )
            case Tabs.TRASH:
                return (
                    <Trash fullscreen={ this.props.fullscreen } />
                )
            default:
                console.log("Invalid Tab");
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

    toggleTheme = () => {
        if(this.state.theme === 'light') {
            // functions to change the theme
            const theme = 'dark';
            this.setState({ theme: theme });
        } else {
            const theme = 'light';
            this.setState({ theme: theme });
        }
    }  // feature in settings to change the theme

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
        this.props.tab.y = (this.props.tab.y - this.pos2);
        this.props.tab.x = (this.props.tab.x - this.pos1);
        this.setState({});
    }

    closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    render() {
        return (
            <div className="window" style={{ ...(this.props.tab.fullscreen ? { top: '0px', left: '100px' } : { top: this.props.tab.y + 'px', left: this.props.tab.x + 'px' }), zIndex: this.props.tab.zIndex}}>
                <div className="window-header" onMouseDown={ this.dragMouseDown } style={{ ...(this.props.tab.fullscreen ? { width: this.props.tab.full_width + "vw" } : { width: this.props.tab.short_width + "vw" }) }}>
                    <div className="window-header-close" onClick={ () => this.props.handleClose(this.props.tab) }>
                        <i className="fas fa-times window-header-close-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-minimize" onClick={ () => this.props.handleMinimize(this.props.tab) }>
                        <i className="fas fa-window-minimize window-header-minimize-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-maximize" onClick={ this.toggleFullScreen }>
                        <i className="fas fa-plus  window-header-maximize-icon"></i>
                    </div>
                    <div className="window-header-title">{this.props.tab.title}</div>
                </div>
                {/* Body of each tab */}
                <TabBody tab={ this.props.tab } fullscreen={ this.props.tab.fullscreen }/>
            </div>
        )       
    }
}

export default Window;