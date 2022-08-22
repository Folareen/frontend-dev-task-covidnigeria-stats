import React from "react";
import TotalStatCard from "./components/TotalStatCard";
import "./styles/css/index.css";
import displayDateAndTime from "./utils/displayDateAndTime";

const App = () => {
  return (
    <div>
      <header>
        <h1>Covid-19 Statistics in Nigeria</h1>
        <p>{displayDateAndTime()}</p>
      </header>
      <div>
        <TotalStatCard statBg={"red"} statTitle={"death"} statValue={30000} />
      </div>
    </div>
  );
};

export default App;
