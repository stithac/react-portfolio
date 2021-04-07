import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">ACS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDiv" aria-controls="navbarDiv" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div className="collapse navbar-collapse" id="navbarDiv">
        <div className="navbar-nav">
          {/* <a className="nav-item nav-link active" href="#">Home</a>
          <a className="nav-item nav-link" href="#">About Me</a>
          <a className="nav-item nav-link" href="#">Portfolio</a> */}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
