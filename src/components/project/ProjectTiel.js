import React, { Component } from 'react';
import '../../css/project.css';

class TechTag extends Component {
    // props : tech name
    render() {
        return (
            <div></div>
        );
    }
}

class ProjectTiel extends Component {

    render() {
        return (
            <div>
                {this.props.project.NAME}
            </div>
        );
    }
}

export default ProjectTiel;