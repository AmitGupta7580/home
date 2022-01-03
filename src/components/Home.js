import { Component } from 'react';
import BottomBar from './BottomNavBar';
import Window from './Window';
import { Tabs } from './Tabs';

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
            tab.x = this.randomGenerator(0, 500);
            tab.y = this.randomGenerator(0, 200);
        }
        this.handleMinimize(tab);
        this.setState({});
    }
    
    handleMinimize = (tab) => {
        if(tab.vis){
            tab.vis = false;
        } else {
            tab.vis = true;
            Tabs.idxcount += 1;
            tab.idx = Tabs.idxcount;
        }
        this.setState({});
    }

    randomGenerator = (min, max) => {
        return Math.floor( min + Math.random() * (max - min) );
    }

    tabs_compare = (a,b) =>  {
        return a.idx - b.idx;
    }

    render() {

        var tabs = [], items = [], tab = null;
        for(tab in Tabs){
            if(Tabs[tab].vis) {
                tabs.push(Tabs[tab]);
            }
        }
        tabs.sort(this.tabs_compare);
        for(tab in tabs){
            tabs[tab].zIndex = parseInt(tab) + 1;
            items.push(<Window tab={ tabs[tab] } handleClose={ this.handleClose } handleMinimize={ this.handleMinimize }  resethome={ () => this.setState({}) } />)
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