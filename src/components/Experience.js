import { Component } from 'react';

class Experience extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>Experience Page full screen</div>
        ) : (
            <div id="experience-small">
                
            </div>
        );
    }
}

export default Experience;