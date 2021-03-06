import React, { Component } from 'react';
import TechTag from '../TechTag';

import '../../css/project.css';
import '../../css/fontawesome-free-5.15.4-web/css/all.css';

class ProjectTiel extends Component {
    render() {
        const { project } = this.props;

        return (
            <div class="projects-tiel">
                <figure>
                    <img src={project.IMAGE} alt={project.NAME} />
                    <figcaption>
                        <div className="projects-tiel-link">
                            {project.VIDEO !== "" && <a href={project.VIDEO} >
                                <i className="fas fa-video"></i>
                            </a>}
                            {project.LINK !== "" && <a href={project.LINK} >
                                <i className="fas fa-link"></i>
                            </a>}
                            {project.CODE !== "" && <a href={project.CODE} >
                                <i className="fab fa-github"></i>
                            </a>}
                        </div>
                        <h4>{project.NAME}</h4>
                        <p>{project.DESCRIPTION}</p>
                        <div className="projects-tiel-tech">
                            {project.TECH.map((tech) => {
                                return <TechTag tech={tech} color="white" bgcolor="red" fontSize="10px" ></TechTag>
                            })}
                        </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default ProjectTiel;