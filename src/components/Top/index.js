import React, { Component } from "react";
import Typical from 'react-typical';
import Header from "../Header";
import "./style.css";

class Top extends Component {

  state = {
    height: "",
    width: ""
  };

  componentDidMount() {
    this.getBrowserDimensions();

  }

  getBrowserDimensions = () => {
    let browserHeight = document.getElementById("wrapper").clientHeight - 20;
    console.log(browserHeight);
    this.setState({height: browserHeight});
  }

  render() {
    return (

      <div id= "wrapper" className="wrapper ">
        <Header />
        <div className="container align-middle" >
          <h1>Hi, my name is <span className="highlighted-text">Ashley Stith.</span></h1>
          <Typical
            steps={['Nice to meet you! 👋🏾', 3000, 'I am a full-stack web developer.', 3000, 'Take a look at my work! 👇🏾', 3000, ]}
            // loop={Infinity}
            wrapper="h2"
          />

        </div>

      </div>

    )
  }
}

export default Top;
