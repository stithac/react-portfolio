import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import foodastic from "./foodastic-screenshot.PNG";
import petocracy from "./petocracy-screenshot.PNG";
import workday from "./workday-screenshot.PNG";
import employee from "./employee-screenshot.PNG";
import budget from "./budget-screenshot.PNG";
import burger from "./burger-screenshot.PNG";
import workout from "./workout-screenshot.PNG";
import weather from "./weather-screenshot.PNG";
import password from "./password-screenshot.PNG";

function Project(props) {

    const projects = [foodastic,  password, petocracy, employee, workout, burger,  weather, budget, workday ];
    const src = projects[parseInt(props.id - 1)];
    console.log(src);

  return (
      <div className="row">
        <div className="col-4">
          <div className="card">
      <div className="img-container align-middle">
        <img alt={props.name}  src={src}/>
        <div>{props.description}</div>
      </div>
      <div className="content">
        <ul>
          <li>
            <a href={props.deployed} ><strong><h4 className="turquoise-text">{props.name}</h4></strong>
            </a>
          </li>

          <li id="simple-text">
            {props.simple}
          </li>
          <li>
            <a href={props.repo} className="purple-text" ><strong>{props.name} Github Repo</strong>
            </a>
          </li>
        </ul>
      </div>

    </div>
      </div>
      </div>


  );
}

export default Project;
