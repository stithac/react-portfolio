import logo from './logo.svg';
import './App.css';
import React from "react";
import Top from "./components/Top";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Top>
            <Header />
            <div className="container">
            </div>
        </Top>
      <Footer />
    </div>
  );
}

export default App;
