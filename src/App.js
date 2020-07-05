import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <NavBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
