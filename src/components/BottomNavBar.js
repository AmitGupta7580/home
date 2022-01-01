import { Component } from 'react';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/bottomBar.css';

const Icons = {
    ABOUT : {class: 'fas fa-portrait', bgColor: 'rgb(245, 129, 62)', color: 'white', transform: '0.9vw, 0.2vw', size: '1.7vw'},
    PROJECT : {class: 'fas fa-project-diagram', bgColor: 'white', color: 'red', transform: '0.5vw, 0.3vw', size: '1.7vw'},
    TRASH : {class: 'fas fa-trash', bgColor: 'white', color: '105, 105, 105)', transform: '0.7vw, 0.2vw', size: '1.7vw'},
    SETTING : {class: 'fas fa-cogs', bgColor: 'white', color: 'rgb(110, 105, 105)', transform: '0.5vw, 0.2vw', size: '1.7vw'},
    GAME : {class: 'fas fa-gamepad', bgColor: 'rgb(36, 52, 201)', color: 'white', transform: '0.5vw, 0.2vw', size: '1.7vw'},
    BLOG : {class: 'fas fa-blog', bgColor: 'rgb(122, 243, 41)', color: 'white', transform: '0.8vw, 0.2vw', size: '1.7vw'},
    WRITEUP : {class: 'fas fa-edit', bgColor: 'rgb(34, 173, 115)', color: 'white', transform: '0.6vw, 0.2vw', size: '1.7vw'},
}

class BottomBarItem extends Component {

    render() {
        return (
            <div className='bottom-bar-item' style={{backgroundColor: this.props.icon.bgColor, color: this.props.icon.color, fontSize: this.props.icon.size}}>
                <i className={this.props.icon.class} style={{ transform: "translate(" + this.props.icon.transform + ")" }}></i>
            </div>
        )
    }
}

class BottomBar extends Component {
    //margin-left: 37.5vw; /* (100 - 6*no.of*items)/2 = 70/2 = 35 */
    constructor(props) {
        super(props);
        const items = [
            <BottomBarItem icon={Icons.ABOUT} />, 
            <BottomBarItem icon={Icons.PROJECT}/>, 
            <BottomBarItem icon={Icons.BLOG} />, 
            <BottomBarItem icon={Icons.WRITEUP} />, 
            <BottomBarItem icon={Icons.GAME} />,
            <BottomBarItem icon={Icons.SETTING} />,
            <BottomBarItem icon={Icons.TRASH} />,
        ];
        this.state = { 
            items: items,
            marginLeft: (100 - 4*(items.length))/2
        };
    }

    render() {
        return (
            <div className='w3-container' id='bottom-bar-container' style={{ marginLeft: this.state.marginLeft + "vw"}}>
                <tbody>{this.state.items}</tbody>
                {/* <button onClick={this.addItem(IconClass.PROJECT, 'red')}>Click Me</button> */}
            </div>
        )
    }
}

export default BottomBar;