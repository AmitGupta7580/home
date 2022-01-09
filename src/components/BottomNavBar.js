import { Component } from 'react';
import {Tabs, Icons} from './Data'

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import '../css/bottomBar.css';

class BottomBarItem extends Component {

    render() {
        return (
            <div className="bottom-bar-tooltip">
                <span className="bottom-bar-tooltiptext" style={{left: this.props.icon.hintLeft + 'vh'}}>
                    <div style={{ backgroundColor: 'white', border: '2px solid grey', borderRadius: '4px', paddingLeft: '2px', paddingRight: '2px' }}>{ this.props.icon.hint }</div>
                </span>
                <div className='bottom-bar-item' style={{backgroundColor: this.props.icon.bgColor, color: this.props.icon.color, fontSize: this.props.icon.size}} onClick={ this.props.handleClick }>
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
        const items = [];
        for(var icon in Icons){
            const tab = Tabs[icon];
            items.push(<BottomBarItem key={icon} icon={Icons[icon]} handleClick={() => props.handleClick(tab)} />)
        }
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