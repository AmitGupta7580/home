import { Component } from 'react';

class Education extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>Education Page full screen</div>
        ) : (
            <div id="education-small">
                
            </div>
        );
    }
}

export default Education;