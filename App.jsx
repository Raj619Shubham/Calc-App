import React from "react";
import add from "./Calc";
import sub from "./Caalc";
import mul from "./Caaalc";
import div from "./Caaaalc";
import "./calc.css";

function App() {
  return (
    <>
      <ul>
        <h1>
          <li> The sum is:{add(34, 4)}</li>

          <li> The sub is:{sub(40, 6)}</li>
          <li> The mul is:{mul(12, 6)}</li>
          <li> The div is:{div(1321, 2)}</li>
        </h1>
      </ul>
    </>
  );
}
export default App;
