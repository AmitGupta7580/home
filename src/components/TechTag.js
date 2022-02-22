import React, { Component } from 'react';
import '../css/window.css';

class TechTag extends Component {
    render() {
        const {tech, color, bgcolor, fontSize, height} = this.props;
        return (
            <div className="tech-tag" style={{ color: color, backgroundColor: bgcolor, fontSize: fontSize }}>{tech}</div>
        );
    }
}

export default TechTag;