import { Component } from 'react';
import { BackgroundImages, CONSTANTS } from './Data';

import '../css/settings.css'

class Settings extends Component {

    render() {

        var bgimages = [];
        for(var i in BackgroundImages){
            const idx = i;
            bgimages.push(
                <div className="setting-bg-image">
                    <img src={BackgroundImages[idx]} alt="" key={idx} style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: "1vh", ...( CONSTANTS.bgidx === Number(idx) ? { border: "3px solid rgb(101, 101, 255)" }: {} )}} onClick={ () => { CONSTANTS.bgidx = Number(idx); this.props.changeBackground() } } />
                </div>
            )
        }

        return (
            <div id="setting">
                <div id="setting-header1-changeTheme">
                    Change Theme    
                </div>
                <div id="setting-theme">
                    <label class="setting-switch">
                        <input type="checkbox" onChange={ this.props.toggleTheme } />
                        <span class="setting-slider setting-round"></span>
                    </label>
                </div>
                <div id="setting-header1-changeBackground">
                    Change Background    
                </div>
                <div id="setting-bg">
                    { bgimages }
                </div>
            </div>
        );
    }
}

export default Settings;