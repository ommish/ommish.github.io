import React, { Component } from "react";
import "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
