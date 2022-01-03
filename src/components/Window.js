import { Component } from 'react';
import { Tabs } from './Tabs';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/window.css';

class TabBody extends Component {
    render() {
        switch (this.props.tab) {
            case Tabs.ABOUT:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.PROJECT:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.BLOG:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.WRITEUP:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.GAME:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.SETTING:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
                )
            case Tabs.TRASH:
                return (
                    <div className='w3-container'>
                        Hello World
                    </div>
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
            theme: 'light',
            ...(this.props.tab.fullscreen ? {
                width: this.props.tab.full_width, 
                top: 0,
                left: 100,
            } : {
                width: this.props.tab.short_width,
                top: this.props.tab.y,
                left: this.props.tab.x,
            })
        };
    }

    toggleFullScreen = () => {
        this.props.tab.fullscreen = !this.props.tab.fullscreen;
        this.setState({ 
            ...(this.props.tab.fullscreen ? {
                width: this.props.tab.full_width, 
                top: 0,
                left: 100,
            } : {
                width: this.props.tab.short_width,
                top: this.props.tab.y,
                left: this.props.tab.x,
            })
        });
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
        this.props.tab.zIndex = 25;
        Tabs.idxcount += 1;
        this.props.tab.idx = Tabs.idxcount;
        this.setState({});
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
        this.setState({
            top: this.props.tab.y,
            left: this.props.tab.x
        });
    }

    closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
        this.props.resethome();
    }

    render() {
        return (
            <div className="window" style={{ top: this.state.top + 'px', left: this.state.left + 'px', zIndex: this.props.tab.zIndex}}>
                <div className="window-header" onMouseDown={ this.dragMouseDown } style={{ width: this.state.width + "vw" }}>
                    <div className="window-header-close" onClick={ () => this.props.handleClose(this.props.tab) }>
                        <i class="fas fa-times window-header-close-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-minimize" onClick={ () => this.props.handleMinimize(this.props.tab) }>
                        <i class="fas fa-window-minimize window-header-minimize-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-maximize" onClick={ this.toggleFullScreen }>
                        <i class="fas fa-plus  window-header-maximize-icon"></i>
                    </div>
                    <div className="window-header-title">{this.props.tab.title}</div>
                </div>
                {/* Body of each tab */}
                <TabBody tab={ this.props.tab }/>
            </div>
        )       
    }
}

export default Window;