import React, { Component } from "react";
import "./style.css";
import img from "./ashHeadshot.png";
import resume from "./resume.pdf";
import document from "./document-icon.png"
import Footer from "../../components/Footer";
import downArrow from "../../components/Top/down.png";
import {Link,animateScroll } from "react-scroll";

function About(props) {

  if (props.footer !== false ){
  return (
        <div>
            <div className="about">
              <div className="about-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12" >
                      <span className="big-text"><strong>Hello</strong><span className="purple-text"><strong>,</strong></span><br></br> a little about me<span className="purple-text">:</span></span><br></br>
                      <span className="italicized-text turquoise-text">An engineer with a passion for web design & development.</span><br></br><br></br>
                      <p className="run-left-four">Born and raised in Virginia, I've lived in "The Old Dominion" my entire life. Since an early age, I've always been interested in technology and figuring out how things worked. As a kid, I took apart small electronics (speakers, remote controls, tvs, etc.), much to the dismay of my parents! Never losing that sense of curiosity, I went on to attend Old Dominion University where I completed my Bachelors degree in Electrical Engineering with a minor in Engineering Management. My Engineering curriculum exposed me to coding (C++) for the first time. Although it was not love at first sight initially, I have grown to love coding!</p>
                      <p className="run-left-four">Upon graduating college, I was lucky enough to snag a federal contracting gig at one of the best consulting firms in the country. It allowed me to move to the DMV area and get my foot in the "Information Technology" door. I've now worked as a web developer for over 10 years and am always looking for new and exciting opportunities.</p>

                    </div>
                    <div className=" col-lg-4 col-md-12 center" align="center">

                        <img className="about-pic " src={img}></img>
                        <div id="skills-div">

                          <div className="row  center">
                            <span id="mySkills" className="turquoise-text center">My Skills:</span>
                            <div className="col-md-12 col-lg-4">
                              <ul className="no-bullet">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS/ jQuery</li>
                              </ul>
                            </div>
                            <div className="col-md-12 col-lg-4">
                              <ul className="no-bullet">
                                <li>NodeJS</li>
                                <li>React</li>
                                <li>Express</li>
                              </ul>

                            </div>
                            <div className="col-md-12 col-lg-4">
                              <ul className="no-bullet">
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Blockchain</li>
                              </ul>

                            </div>
                          </div>
                          <div className="row">
                            <div className="col center">
                            <a href={resume}>
                                <div className="skill">
                                <img className="arrow" src={document}></img>
                                  <p>MyResume</p>
                                </div>
                              </a>
                            </div>
                          </div>
                          </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>

              <Footer />

        </div>
    )
          } else return (
            <div>
            <div className="about">
              <div className="about-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <span className="big-text" id="hello"><strong>Hello</strong><span className="purple-text"><strong>,</strong></span><br></br> a little about me<span className="purple-text">:</span></span><br></br>
                      <span className="italicized-text turquoise-text">An engineer with a passion for web design & development.</span><br></br><br></br>
                      <p className="run-left-four">Born and raised in Virginia, I've lived in "The Old Dominion" my entire life. Since an early age, I've always been interested in technology and figuring out how things worked. As a kid, I took apart small electronics (speakers, remote controls, tvs, etc.), much to the dismay of my parents! Never losing that sense of curiosity, I went on to attend Old Dominion University where I completed my Bachelors degree in Electrical Engineering with a minor in Engineering Management. My Engineering curriculum exposed me to coding (C++) for the first time. Although it was not love at first sight initially, I have grown to love coding!</p>
                      <p className="run-left-four">Upon graduating college, I was lucky enough to snag a federal contracting gig at one of the best consulting firms in the country. It allowed me to move to the DMV area and get my foot in the "Information Technology" door. I've now worked as a web developer for over 10 years and am always looking for new and exciting opportunities.</p>

                    </div>
                    <div className="col-lg-4 col-md-12 center" align="center">
                      <div className= "center">

                          <img id ="test" className="about-pic" src={img}></img>

                      </div>

                      <div id="skills-div">

                        <div className="row  center">
                          <span id="mySkills" className="turquoise-text center">My Skills:</span>
                          <div className="col-md-12 col-lg-4">
                            <ul className="no-bullet">
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JS/ jQuery</li>
                            </ul>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <ul className="no-bullet">
                              <li>NodeJS</li>
                              <li>React</li>
                              <li>Express</li>
                            </ul>

                          </div>
                          <div className="col-md-12 col-lg-4">
                            <ul className="no-bullet">
                              <li>SQL</li>
                              <li>MongoDB</li>
                              <li>Blockchain</li>
                            </ul>

                          </div>
                        </div>
                        <div className="row">
                          <div className="col center">
                          <a href={resume}>
                              <div className="skill">
                              <img className="arrow" src={document}></img>
                                <p>MyResume</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="arrow-div" >
                    <Link className="cursor"
                     to="projects-title"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={1000}
                     >
                        <img id="about-arrow" className="arrow" src={downArrow}></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

        </div>
          )
}

export default About;

