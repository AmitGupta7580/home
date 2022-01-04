import { Component } from 'react';

import '../css/writeup.css';

class Writeup extends Component {
    render() {
        return this.props.fullscreen ? (
            <div id="writeup-large">
                <div id="writeup-large-header">
                    <div style={{ width:'85vw' }}>
                        "https://writeups.ammmy.me"
                    </div>
                    <a target="_blank" href="https://writeups.ammmy.me">
                        <div>
                            <i className="fas fa-location-arrow"></i>
                        </div>
                    </a>
                </div>
                <iframe src={"https://writeups.ammmy.me"} title="Blogs Iframe Large" style={{ width: "90vw", height: "85vh"}} />    
            </div>
        ) : (
            <div id="writeup-small">
                <div id="writeup-small-header">
                    <div style={{ width:'35vw' }}>
                        "https://writeups.ammmy.me"
                    </div>
                    <a target="_blank" href="https://writeups.ammmy.me">
                        <div>
                            <i className="fas fa-location-arrow"></i>
                        </div>
                    </a>
                </div>
                <iframe src={"https://writeups.ammmy.me"} title="Blogs Iframe Small" style={{ width: "40vw", height: "60vh"}} />    
            </div>
        );
    }
}

export default Writeup;