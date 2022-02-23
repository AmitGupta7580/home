import { Component } from 'react';
import { projects } from '../../data/projects';
import { CONSTANTS } from '../Data';

import '../../css/project.css';
import ProjectTabs from './ProjectTabs';
import ProjectTiel from './ProjectTiel';


class Project extends Component {

    type = "MAJOR";
    branch = "ALL";

    constructor(props) {
        super(props);
        const [filtered_projects, branches] = this.generate_items();
        this.state = { 
            filtered_projects: filtered_projects,
            branches: branches,
        };
    }

    generate_items = () => {
        var filtered_projects = [];
        var branches = new Set(["ALL"]);
        projects.map((project) => {
            if(project.TYPE === this.type) {
                project.BRANCH.map((branch) => {
                    branches.add(branch);
                });
            }
            if(project.TYPE === this.type && (this.branch === "ALL" || project.BRANCH.indexOf(this.branch) !== -1)) {
                filtered_projects.push(project);
            }
        });
        branches = Array.from(branches);
        return [filtered_projects, branches];
    }

    changeType = (type) => {
        this.type = type;
        this.branch = "ALL";
        const [filtered_projects, branches] = this.generate_items();
        this.setState({ 
            filtered_projects: filtered_projects,
            branches: branches,
        });
    }

    changeBranch = (branch) => {
        this.branch = branch;
        const [filtered_projects, branches] = this.generate_items();
        this.setState({ filtered_projects: filtered_projects });
    }

    render() {
        return (
            <div id="project">
                <div id="project-major-minor-switch">
                    <ProjectTabs onClick={this.changeType} activeTab={this.type} > 
                        <div label="MAJOR"></div>
                        <div label="MINOR"></div>
                    </ProjectTabs>
                </div>
                <div id="project-branch-switch">
                    <ProjectTabs onClick={this.changeBranch} activeTab={this.branch} > 
                        {this.state.branches.map((branch) => {
                            return <div label={branch}></div>
                        })}
                    </ProjectTabs>
                </div>
                <div id="projects" style={{ ...(CONSTANTS.light ? { backgroundColor: CONSTANTS.LIGHT_BGCOLOR[1] } : { backgroundColor: CONSTANTS.DARK_BGCOLOR[1] }) }}>
                    {this.state.filtered_projects.map((project) => {
                        return <ProjectTiel project={project}></ProjectTiel>
                    })}
                    <div style={{ width: "100%", height: "30%" }}></div> {/* for correct scrolling */}
                </div>
            </div>
        )
    }
}

export default Project;