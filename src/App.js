// import logo from './logo.svg';
import './App.css';
import React from "react";
import Top from "./components/Top";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/home" component={Top} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>

      </div>
    </Router>
  );
}

export default App;

