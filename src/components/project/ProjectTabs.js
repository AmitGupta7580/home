import React, { Component } from 'react';
import '../../css/project.css';

class ProjectTabs extends Component {

    render() {
        const { props: { children, onClick, activeTab } } = this;

        return (
            <div className="project-tab-list">
                {children.map((child) => {
                    const { label } = child.props;
                    var className = 'project-tab-list-item';
                    if (activeTab === label) {
                        className += ' project-tab-list-active';
                    }
                    return (
                        <div
                            className={className}
                            onClick={() => {onClick(label)}}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ProjectTabs;