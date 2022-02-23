import React, { Component } from 'react';
import '../../css/project.css';
import { CONSTANTS } from '../Data';

class ProjectTabs extends Component {

    render() {
        const { props: { children, onClick, activeTab } } = this;

        return (
            <div className="project-tab-list">
                {children.map((child) => {
                    const { label } = child.props;
                    return activeTab === label ? 
                        <div className="project-tab-list-item project-tab-list-active" onClick={() => {onClick(label)}} style={{ ...( CONSTANTS.light ? { backgroundColor: CONSTANTS.DARK_BGCOLOR[1], color: "white" } : { backgroundColor: CONSTANTS.LIGHT_BGCOLOR[1], color: "black" } ) }}>
                            {label}
                        </div>
                    : <div className="project-tab-list-item" onClick={() => {onClick(label)}}>
                        {label}
                    </div>
                })}
            </div>
        );
    }
}

export default ProjectTabs;