import { Component } from 'react';
import { CONSTANTS, Tabs } from './Data';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Achievements from './Achievements';
import Volunteer from './Volunteer';
import Blog from './Blog';
import Writeup from './Writeup';
import Games from './Games';
import Settings from './Settings';
import Trash from './Trash';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/window.css';
import $ from 'jquery';

class TabBody extends Component {
    render() {
        switch (this.props.tab) {
            case Tabs.ABOUT:
                return (
                    <About fullscreen={ this.props.fullscreen } />
                )
            case Tabs.EDUCATION:
                return (
                    <Education fullscreen={ this.props.fullscreen } />
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
                    <Settings fullscreen={ this.props.fullscreen } changeBackground={ this.props.changeBackground } />
                )
            case Tabs.TRASH:
                return (
                    <Trash fullscreen={ this.props.fullscreen } />
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

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        return (
            <div className="window" id={"window-" + this.props.tab.id} style={{ ...(this.props.tab.fullscreen ? { top: '0px', left: '100px', width: this.props.tab.full_width + "vw", height: this.props.tab.full_height + "vh"} : { top: this.props.tab.y + 'px', left: this.props.tab.x + 'px', width: this.props.tab.short_width + "vw", height: this.props.tab.short_height + "vh" }), zIndex: this.props.tab.zIndex, opacity: this.props.tab.opacity }}>
                <div className="window-header" onMouseDown={ this.dragMouseDown }>
                    <div className="window-header-close" onClick={ () => this.props.handleClose(this.props.tab) }>
                        <i className="fas fa-times window-header-close-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-minimize" onClick={ () => ( async () => {
                        // animation
                        var counter = 50, sleep_time = 2;
                        const facX = ((window.innerWidth*(25 + (4.3)*this.props.tab.id))/100 - this.props.tab.x)/counter;
                        const facY = (window.innerHeight - this.props.tab.y)/counter;
                        var facW = 0, facH = 0;
                        $('#window-'+this.props.tab.id).each(function(){
                            facW = (0 - Number($(this)[0].style.width.slice(0, -2)))/counter;
                            facH = (0 - Number($(this)[0].style.height.slice(0, -2)))/counter;
                        });
                        const facOPC = (0 - 1)/counter;
                        while(counter !== 0){
                            $('#window-'+this.props.tab.id).each(function(){
                                const X = Number($(this)[0].style.left.slice(0, -2)) + facX;
                                const Y = Number($(this)[0].style.top.slice(0, -2)) + facY;
                                const W = Number($(this)[0].style.width.slice(0, -2)) + facW;
                                const H = Number($(this)[0].style.height.slice(0, -2)) + facH;
                                const opacity = Number($(this)[0].style.opacity) + facOPC;
                                $(this)[0].style.top = Y + "px";
                                $(this)[0].style.left = X + "px";
                                $(this)[0].style.width = W + "vw";
                                $(this)[0].style.height = H + "vh";
                                $(this)[0].style.opacity = opacity;
                            });
                            counter -= 1;
                            await sleep(sleep_time);
                        }
                        this.props.handleMinimize(this.props.tab);
                    })() }>
                        <i className="fas fa-window-minimize window-header-minimize-icon"></i>
                    </div>&nbsp;
                    <div className="window-header-maximize" onClick={() => ( async () => {
                        // animation
                        var counter = 50, sleep_time = 2;
                        const facX = this.props.tab.fullscreen ? (this.props.tab.x - 100)/counter : (100 - this.props.tab.x)/counter;
                        const facY = this.props.tab.fullscreen ? (this.props.tab.y - 0)/counter : (0 - this.props.tab.x)/counter;
                        const defH = this.props.tab.fullscreen ? this.props.tab.short_height : this.props.tab.full_height, defW = this.props.tab.fullscreen ? this.props.tab.short_width : this.props.tab.full_width;
                        var facW = 0, facH = 0;
                        $('#window-'+this.props.tab.id).each(function(){
                            facW = (defW - Number($(this)[0].style.width.slice(0, -2)))/counter;
                            facH = (defH - Number($(this)[0].style.height.slice(0, -2)))/counter;
                        });
                        while(counter !== 0){
                            $('#window-'+this.props.tab.id).each(function(){
                                const X = Number($(this)[0].style.left.slice(0, -2)) + facX;
                                const Y = Number($(this)[0].style.top.slice(0, -2)) + facY;
                                const W = Number($(this)[0].style.width.slice(0, -2)) + facW;
                                const H = Number($(this)[0].style.height.slice(0, -2)) + facH;
                                $(this)[0].style.top = Y + "px";
                                $(this)[0].style.left = X + "px";
                                $(this)[0].style.width = W + "vw";
                                $(this)[0].style.height = H + "vh";
                            });
                            counter -= 1;
                            await sleep(sleep_time);
                        }
                        this.toggleFullScreen();
                    })() }>
                        <i className="fas fa-plus  window-header-maximize-icon"></i>
                    </div>
                    <div className="window-header-title">{this.props.tab.title}</div>
                </div>
                {/* Body of each tab */}
                <TabBody tab={ this.props.tab } fullscreen={ this.props.tab.fullscreen } changeBackground={this.props.changeBackground } />
            </div>
        )       
    }
}

export default Window;