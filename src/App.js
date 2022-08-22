import React from "react";
import "./styles/css/index.css";
import displayDateAndTime from "./utils/displayDateAndTime";

const App = () => {
  return (
    <div>
      <header>
        <h1>Covid-19 Statistics in Nigeria</h1>
        <p>{displayDateAndTime()}</p>
      </header>
    </div>
  );
};

export default App;
