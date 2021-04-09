import React, { Component } from "react";
import "./style.css";
import projects from "../../projects.json";
import Project from "../../components/Project";
import Footer from "../../components/Footer";
import {Link,animateScroll } from "react-scroll";
import upArrow from "./up-arrow.png";


function Portfolio(props) {

    if (props.button !== "hide"){
        return (
            <div>
                <div className="portfolio">

                    <h1 className="underlined-text" id="projects-title">My Latest Projects</h1>
                    <div className="container project-wrapper">

                        {projects.map(project => (
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
                <Footer />
            </div>
        )
    } else return (
            <div>
                <div className="portfolio">

                    <h1 className="underlined-text" id="projects-title">My Latest Projects</h1>
                    <div className="container project-wrapper">

                        {projects.map(project => (
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
                    <div className = "container">
                        <div id="portfolioDiv" >
                            <Link className="cursor"
                            to="wrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>
                                <img  id="upArrow" className="arrow" src={upArrow}></img>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
        )


}

export default Portfolio;
