import { Component } from 'react';
import {Tabs, Icons} from './Data'

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/bottomBar.css';

class BottomBarItem extends Component {

    render() {
        return (
            <div className="bottom-bar-tooltip">
                <span className="bottom-bar-tooltiptext" style={{bottom: "55px", left: this.props.hintLeft + 'px', transform: 'translate(-50%)'}}>
                    <div style={{ backgroundColor: 'white', border: '2px solid grey', borderRadius: '4px', paddingLeft: '2px', paddingRight: '2px' }}>{ this.props.icon.hint }</div>
                </span>
                <div className='bottom-bar-item' style={{backgroundColor: this.props.icon.bgColor, color: this.props.icon.color}} onClick={ this.props.handleClick }>
                    <i className={this.props.icon.class} style={{ transform: "translate(" + this.props.icon.transform + ")" }}></i>
                </div>
            </div>
        )
    }
}

class BottomBar extends Component {
    //margin-left: 37.5vw; /* (100 - 6*no.of*items)/2 = 70/2 = 35 */
    constructor(props) {
        super(props);
        const items = [], left = (window.innerWidth - 50*(Object.keys(Icons).length))/2;
        var hintleft = 25;
        for(var icon in Icons){
            const tab = Tabs[icon];
            items.push(<BottomBarItem key={icon} icon={Icons[icon]} handleClick={ async () => await props.handleClick(tab)} hintLeft={ hintleft }/>)
            hintleft += 50;
        }
        this.state = { 
            items: items,
            left: left
        };
    }

    render() {
        return (
            <div id='bottom-bar-container' style={{ left: this.state.left + "px" }}>
                <tbody>{this.state.items}</tbody>
            </div>
        )
    }
}

export default BottomBar;