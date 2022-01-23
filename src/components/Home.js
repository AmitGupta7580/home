import { Component } from 'react';
import BottomBar from './BottomNavBar';
import Window from './Window';
import { CONSTANTS, Tabs } from './Data';
import $ from 'jquery';

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

    handelOpen = async (tab) => {
        const vis = tab.vis;
        if(!tab.open){
            tab.open = true;
            tab.x = this.randomGenerator(100, 500);
            tab.y = this.randomGenerator(20, 200);
        }
        if(!tab.vis){
            tab.vis = true;
            CONSTANTS.idxcount += 1;
            tab.zIndex = CONSTANTS.idxcount;
            tab.opacity = 0;
            this.setState({});
        }
        if(!vis){
            // animation
            const sX = (window.innerWidth*(25 + (4.3)*tab.id))/100;
            const dX = tab.fullscreen ? 100 : tab.x;
            const sY = window.innerHeight;
            const dY = tab.fullscreen ? 0 : tab.y;
            const dW = tab.fullscreen ? tab.full_width : tab.short_width;
            const dH = tab.fullscreen ? tab.full_height : tab.short_height;
            const sW = 0, sH = 0;
            await this.handelAnimation(tab, sX, dX, sY, dY, sW, dW, sH, dH, 1);
        } else if(vis) {
            // animation
            const sX = tab.fullscreen ? 100 : tab.x;
            const dX = (window.innerWidth*(25 + (4.3)*tab.id))/100;
            const sY = tab.fullscreen ? 0 : tab.y;
            const dY = window.innerHeight;
            const dW = 0, dH = 0;
            const sW = tab.fullscreen ? tab.full_width : tab.short_width; 
            const sH = tab.fullscreen ? tab.full_height : tab.short_height;
            await this.handelAnimation(tab, sX, dX, sY, dY, sW, dW, sH, dH, -1);
            tab.vis = false;
            this.setState({});
        }
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

    handelAnimation = async (tab, sX, dX, sY, dY, sW, dW, sH, dH, opc) => {
        // setting-intial pos
        await this.sleep(5);
        $('#window-'+tab.id).each(function(){
            $(this)[0].style.top = sY + "px";
            $(this)[0].style.left = sX + "px";
            $(this)[0].style.width = sW + "vw";
            $(this)[0].style.height = sH + "vh";
        })
        // animation
        var counter = 50, sleep_time = 2;
        const facX = (dX - sX)/counter;
        const facY = (dY - sY)/counter;
        const facW = (dW - sW)/counter; 
        const facH = (dH - sH)/counter;
        const facOPC = opc/counter;
        while(counter !== 0){
            $('#window-'+tab.id).each(function(){
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
            await this.sleep(sleep_time);
        }
    }

    randomGenerator = (min, max) => {
        return Math.floor( min + Math.random() * (max - min) );
    }
    
    sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        var items = [];
        for(var tab in Tabs){
            if(Tabs[tab].vis) {
                items.push(<Window key={tab} tab={ Tabs[tab] } handleClose={ this.handleClose } handleMinimize={ this.handleMinimize } changeBackground = { this.props.changeBackground } handelAnimation = { this.handelAnimation } />)
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