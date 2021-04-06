import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">

        <Wrapper>

        </Wrapper>

      </div>
      <Footer />
    </div>
  );
}

export default App;
