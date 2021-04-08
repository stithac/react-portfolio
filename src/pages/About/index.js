import React, { Component } from "react";
import "./style.css";

class About extends Component {

  render() {
    return (
        <div>
            <div className="about">
              <div className="about-container">
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                      <span className="big-text"><strong>Hello</strong><span className="purple-text"><strong>,</strong></span><br></br> a little about me<span className="purple-text">:</span></span><br></br>
                      <span className="italicized-text">An engineer with a passion for web design & development.</span><br></br><br></br>
                      <p className="run-left-four">Born and raised in Virginia, I've lived in "The Old Dominion" my entire life. Since an early age, I've always been interested in technology and figuring out how things worked. As a kid, I took apart small electronics (speakers, remote controls, tvs, etc.), much to the dismay of my parents! Never losing that sense of curiosity, I went on to attend Old Dominion University where I completed my Bachelors degree in Electrical Engineering with a minor in Engineering Management. My Engineering curriculum exposed me to coding (C++) for the first time. Although it was not love at first sight initially, I have grown to love coding!</p>
                      <p className="run-left-four">Upon graduating college, I was lucky enough to snag a federal contracting gig at one of the best consulting firms in the country. It allowed me to move to the DMV area and get my foot in the "Information Technology" door. I've now worked as a web developer for over 10 years and am always looking for new and exciting opportunities.</p>

                    </div>
                    <div className="col-4">
                      <div className="img-div">
                        <img className="about-pic" src="../../img/ashHeadshot.png"></img>
                      </div>
                      <div id="skills-div">
                        <div className="row">
                          <div className="col center">
                            <a href="../Stith,Ashley-September2020.pdf">
                              <div className="skill">
                                <p>Resume</p>
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
        </div>
    )
  }
}

export default About;

