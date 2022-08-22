import React from "react";
import { StatesStat } from "./components/StateStat";
import TotalStatCard from "./components/TotalStatCard";
import "./styles/css/index.css";
import displayDateAndTime from "./utils/displayDateAndTime";

const App = () => {
  return (
    <main>
      <header>
        <h1>Covid-19 Statistics in Nigeria</h1>
        <p>{displayDateAndTime()}</p>
      </header>

      <div>
        <TotalStatCard statBg={"red"} statTitle={"death"} statValue={30000} />
      </div>

      <div className="stat--table-container">
        <h2>Confirmed Cases for each state:</h2>
        <table>
          <tr>
            <th>States</th>
            <th>Confirmed Cases</th>
            <th>Cases on Admission</th>
            <th>Discharged Cases</th>
            <th>Death Cases</th>
          </tr>
          <StatesStat
            stateName={"lagos"}
            confirmedCases={2344}
            dishargedCases={8944}
            admittedCases={9494}
            deathStat={94}
          />
          <StatesStat
            stateName={"lagos"}
            confirmedCases={2344}
            dishargedCases={8944}
            admittedCases={9494}
            deathStat={94}
          />
        </table>
      </div>
    </main>
  );
};

export default App;
