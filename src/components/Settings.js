import { Component } from 'react';
import { BackgroundImages, CONSTANTS } from './Data';

import '../css/settings.css'

class Settings extends Component {

    render() {

        return (
            <div id="setting">
                <div id="setting-header1-changeBackground">
                    Change Background    
                </div>
                <div className="setting-bg">
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['0']} alt="" key={'0'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 0 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 0; this.props.changeBackground() } } />
                    </div>
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['1']} alt="" key={'1'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 1 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 1; this.props.changeBackground() } } />
                    </div>
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['2']} alt="" key={'2'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 2 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 2; this.props.changeBackground() } } />
                    </div>
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['3']} alt="" key={'3'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 3 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 3; this.props.changeBackground() } } />
                    </div>
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['4']} alt="" key={'4'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 4 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 4; this.props.changeBackground() } } />
                    </div>
                    <div className="setting-bg-image">
                        <img src={BackgroundImages['5']} alt="" key={'5'} style={{ width: "20vh", height: "20vh", borderRadius: "1vh", ...( CONSTANTS.bgidx === 5 ? { border: "5px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = 5; this.props.changeBackground() } } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;