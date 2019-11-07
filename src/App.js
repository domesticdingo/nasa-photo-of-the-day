import React from "react";
import PhotoCard from "./photoCard/photoCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>NASA Photo of the Day</h1>
      </header>
      <div className = "body">
        <PhotoCard />
      </div>
      <footer>
        <p>Domesticdingo 2019</p>
      </footer>
    </div>
  );
}

export default App;
