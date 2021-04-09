import React, { Component } from "react";
import Typical from 'react-typical';
import Typist from 'react-typist';
import { Animate, AnimateKeyframes }  from 'react-simple-animate';
import Header from "../Header";
import About from "../../pages/About";
import Footer from "../Footer";
import Portfolio from "../../pages/Portfolio";
import "./style.css";
import $ from "jquery";
import down from "./down-arrow.png";
import wave from "./hand-wave.png"

class Top extends Component {

    state = {
        play:false,
        render: false,
        animateFlag: false
    };

    // When the component mounts, make the API call to get 50 employees
    componentDidMount() {

            console.log("Setting timeout")
            setTimeout(function() { //Start the timer

                $("#MyWorkButton").removeClass("hide");
                // render = "true"
                console.log("delay")
            }.bind(this), 19500)

    }

    render() {

        return (
            <div id= "wrapper" className="wrapper ">

                <div className="container align-middle top-container" >
                    <h1>Hi, my name is <span className="highlighted-text">Ashley Stith.</span></h1>
                    <Typist avgTypingDelay={125} className="typist">
                        <span> Nice to meet you! 👋🏾</span>
                        <Typist.Backspace count={22} delay={1000} />
                        <span> I am a full-stack web developer. </span>
                        <Typist.Backspace count={33} delay={1000} />
                        <span> Take a look at my work! <img className="emoji" src={down}></img> </span>

                    </Typist>
                    <AnimateKeyframes
                        play="play" // set play true to start the animation
                        duration={7} // how long is the animation duration
                        delay={19}
                        keyframes={["opacity: 0", "opacity: 1"]}
                    >
                        <button id="MyWorkButton" className="hide">View My Work</button>
                    </AnimateKeyframes>


                </div>
                <About />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}

export default Top;