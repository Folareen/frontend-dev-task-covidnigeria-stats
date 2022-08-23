import React, { useState, useEffect } from "react";
import { StatesStat } from "./components/StateStat";
import TotalStatCard from "./components/TotalStatCard";
import "./styles/css/index.css";
import displayDateAndTime from "./utils/displayDateAndTime";
import { TailSpin } from "react-loader-spinner";
import { getCovidData } from "./redux/features/covidDataSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { loading, covidData } = useSelector((store) => store.covidData);

  useEffect(() => {
    dispatch(getCovidData());
    console.log("dispatch");
  }, []);

  return (
    <main>
      <header>
        <h1>
          <span style={{ color: "darkred" }}>Covid-19</span> Statistics in
          <span style={{ color: "darkgreen" }}> Nigeria</span>
        </h1>
        <p>{displayDateAndTime()}</p>
      </header>

      {loading ? (
        <div className="loading">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            visible={true}
          />
          Fetching Data...
        </div>
      ) : (
        <>
          <div>
            {/* {covidData.data} */}
            <TotalStatCard
              statBg={"red"}
              statTitle={"death"}
              statValue={30000}
            />
          </div>

          <div className="stat--table-container">
            <h2>Confirmed Cases for each state:</h2>
            <table>
              <thead>
                <tr>
                  <th>States</th>
                  <th>Confirmed Cases</th>
                  <th>Cases on Admission</th>
                  <th>Discharged Cases</th>
                  <th>Death Cases</th>
                </tr>
              </thead>
              <tbody>
                <StatesStat
                  stateName={"lagos"}
                  confirmedCases={2344}
                  dishargedCases={8944}
                  admittedCases={9494}
                  deathStat={94}
                />

                {covidData.data.states.map(
                  ({
                    casesOnAdmission,
                    confirmedCases,
                    death,
                    discharged,
                    state,
                    id,
                  }) => {
                    return (
                      <StatesStat
                        stateName={state}
                        confirmedCases={confirmedCases}
                        dishargedCases={discharged}
                        admittedCases={casesOnAdmission}
                        deathStat={death}
                      />
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
};

export default App;
