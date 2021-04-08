import React from "react";
import "./style.css";
import foodastic from "./foodastic-screenshot.PNG";
import petocracy from "./petocracy-screenshot.PNG";


function Project(props) {

    const projects = [foodastic, petocracy];
    const src = projects[parseInt(props.id - 1)];
    console.log(src);

  return (
      <div className="row">
        <div className="col-4">
          <div className="card">
      <div className="img-container">
        <img alt={props.name}  src={src}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployed}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.repo}
          </li>
        </ul>
      </div>

    </div>
      </div>
      </div>


  );
}

export default Project;
