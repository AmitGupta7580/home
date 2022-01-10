import { Component } from 'react';

import '../css/browser.css';

import favicon from '../images/favicon-16x16.png'

class Writeup extends Component {
    render() {
        return (
            <div>
                <div id="browser-header1">
                    <div className="browser-header1-quater1"><div id="browser-header1-quater2"></div></div>
                    <div id="browser-header1-tab">
                        <img src={favicon} alt=""/> &nbsp;&nbsp;
                        <div style={{ fontSize: '11px', color: 'white' }}>
                            Writeups | Amit Gupta
                        </div>
                    </div>
                    <div className="browser-header1-quater1"><div id="browser-header1-quater3"></div></div>
                    
                    <div id="browser-header1-navigator">
                        <a target="_blank" href="https://writeups.ammmy.me">
                            <i className="fas fa-location-arrow"></i>
                        </a>
                    </div>
                    
                </div>
                <div id="browser-header2">
                    <div style={{ fontSize: '12px' }}>
                        <i className="fas fa-arrow-left browser-header2-icon"></i>
                        <i className="fas fa-arrow-right browser-header2-icon"></i>
                        <i className="fas fa-redo-alt browser-header2-icon"></i>
                    </div>
                    <div id="browser-header2-url">
                        <i class="fas fa-exclamation-triangle" style={{ marginLeft: '1.5vh', marginTop: '0.5vh'}}></i> &nbsp; Not secure | &nbsp; <div style={{ color: 'white' }}>writeups.ammmy.me</div> 
                    </div>
                </div>
                { (this.props.fullscreen) ? <iframe src={"https://writeups.ammmy.me"} title="Writeups Iframe Large" style={{ width: "100%", height: "75vh"}} /> : <iframe src={"https://writeups.ammmy.me"} title="Writeups Iframe Small" style={{ width: "100%", height: "60vh"}} /> }
            </div>
        );
    }
}

export default Writeup;