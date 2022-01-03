import { Component } from 'react';
import {Tabs, Icons} from './Tabs'

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/bottomBar.css';

class BottomBarItem extends Component {

    render() {
        return (
            <div className='bottom-bar-item' style={{backgroundColor: this.props.icon.bgColor, color: this.props.icon.color, fontSize: this.props.icon.size}} onClick={ this.props.handleClick }>
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
            <BottomBarItem icon={Icons.ABOUT} handleClick={() => props.handleClick(Tabs.ABOUT)}/>, 
            <BottomBarItem icon={Icons.PROJECT} handleClick={() => props.handleClick(Tabs.PROJECT)} />, 
            <BottomBarItem icon={Icons.BLOG} handleClick={() => props.handleClick(Tabs.BLOG)} />, 
            <BottomBarItem icon={Icons.WRITEUP} handleClick={() => props.handleClick(Tabs.WRITEUP)} />, 
            <BottomBarItem icon={Icons.GAME} handleClick={() => props.handleClick(Tabs.GAME)} />,
            <BottomBarItem icon={Icons.SETTING} handleClick={() => props.handleClick(Tabs.SETTING)} />,
            <BottomBarItem icon={Icons.TRASH} handleClick={() => props.handleClick(Tabs.TRASH)} />,
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