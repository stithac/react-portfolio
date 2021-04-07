import React, { Component } from "react";
import Typical from 'react-typical';
import { Animate, AnimateKeyframes }  from 'react-simple-animate';
import Header from "../Header";
import "./style.css";
import $ from "jquery";

class Top extends Component {

    state = {
        play:false,
        render: false,
        animateFlag: false
    };

    // When the component mounts, make the API call to get 50 employees
    componentDidMount() {
        this.setState({ play:"play"});

            console.log("Setting timeout")
            setTimeout(function() { //Start the timer
                // this.setState({render: true}) //After 15 seconds, set render to true
                $("#MyWorkButton").removeClass("hide");
                // render = "true"
                console.log("delay")
            }.bind(this), 12000)

    }

    render() {

        return (
            <div id= "wrapper" className="wrapper ">
                <Header />
                <div className="container align-middle" >
                    <h1>Hi, my name is <span className="highlighted-text">Ashley Stith.</span></h1>
                    <Typical
                        steps={['Nice to meet you! 👋🏾', 3000, 'I am a full-stack web developer.', 3000, 'Take a look at my work! 👇🏾', 3000, ]}

                        wrapper="h2"
                    />
                    <AnimateKeyframes
                        play="play" // set play true to start the animation
                        duration={7} // how long is the animation duration
                        delay={11}
                        keyframes={["opacity: 0", "opacity: 1"]}
                    >
                        <button id="MyWorkButton" className="hide">View My Work</button>
                    </AnimateKeyframes>


                </div>
            </div>
        )
    }
}

export default Top;
