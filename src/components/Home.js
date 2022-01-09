import { Component } from 'react';
import BottomBar from './BottomNavBar';
import Window from './Window';
import { CONSTANTS, Tabs } from './Data';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 36
        };
    }

    handleClose = (tab) => {
        tab.open = false;
        tab.fullscreen = false;
        this.handleMinimize(tab);
        this.setState({});
    }

    handelOpen = (tab) => {
        if(!tab.open){
            tab.open = true;
            tab.x = this.randomGenerator(100, 500);
            tab.y = this.randomGenerator(20, 200);
        }
        this.handleMinimize(tab);
        this.setState({});
    }
    
    handleMinimize = (tab) => {
        if(tab.vis){
            tab.vis = false;
        } else {
            tab.vis = true;
            CONSTANTS.idxcount += 1;
            tab.zIndex = CONSTANTS.idxcount;
        }
        this.setState({});
    }

    randomGenerator = (min, max) => {
        return Math.floor( min + Math.random() * (max - min) );
    }

    render() {
        var items = [];
        for(var tab in Tabs){
            if(Tabs[tab].vis) {
                items.push(<Window key={tab} tab={ Tabs[tab] } handleClose={ this.handleClose } handleMinimize={ this.handleMinimize } changeBackground = { this.props.changeBackground } />)
            }
        }

        return (
        <>
            <div className='w3-container'>
                <tbody>{items}</tbody>
            </div>
            <BottomBar handleClick={ this.handelOpen }/>
        </>
        )
    }
}

export default Home;