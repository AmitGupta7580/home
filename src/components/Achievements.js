import { Component } from 'react';

class Achievements extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>Achievements Page full screen</div>
        ) : (
            <div id="achievements-small">
                
            </div>
        );
    }
}

export default Achievements;