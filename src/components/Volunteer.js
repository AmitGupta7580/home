import { Component } from 'react';

class Volunteer extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>Volunteer Page full screen</div>
        ) : (
            <div id="volunteer-small">
                
            </div>
        );
    }
}

export default Volunteer;