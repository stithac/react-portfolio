import React, { Component } from "react";
import "./style.css";
import projects from "../../projects.json";
import Project from "../../components/Project"

class Portfolio extends Component {

    state = {
        projects
    }

    render() {
        return (
            <div>
                <div className="portfolio">
                    <h1 className="underlined-text">Projects</h1>
                    <div className="container project-wrapper">

                        {this.state.projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            deployed={project.deployed}
                            repo={project.repo}
                            // description={project.description}
                            src={project.src}
                            simple={project.simple}
                        />
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}

export default Portfolio;

