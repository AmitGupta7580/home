import React, { Component } from 'react';
import '../../css/project.css';
import '../../css/fontawesome-free-5.15.4-web/css/all.css';

class TechTag extends Component {
    render() {
        const {tech} = this.props;
        return (
            <div className="projects-tiel-tech-tag">{tech}</div>
        );
    }
}

class ProjectTiel extends Component {
    render() {
        const { project } = this.props;

        return (
            <div class="projects-tiel">
                <figure>
                    <img src={project.IMAGE} alt={project.NAME} />
                    <figcaption>
                        {project.VIDEO !== "" && <a href={project.VIDEO} id="projects-tiel-video">
                            <i className="fas fa-video"></i>
                        </a>}
                        {project.LINK !== "" && <a href={project.LINK} id="projects-tiel-link">
                            <i className="fas fa-link"></i>
                        </a>}
                        {project.CODE !== "" && <a href={project.CODE} id="projects-tiel-code">
                            <i className="fab fa-github"></i>
                        </a>}
                        <h4>{project.NAME}</h4>
                        <p>{project.DESCRIPTION}</p>
                        <div id="projects-tiel-tech">
                            {project.TECH.map((tech) => {
                                return <TechTag tech={tech} ></TechTag>
                            })}
                        </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default ProjectTiel;