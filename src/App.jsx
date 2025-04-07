import "./App.css";
import GlobalContext from "./GlobalContext/context"; //used alias name for meaingful name
import { useState } from "react";
import Routing from "./components/routing/Routing"; // Corrected the path to match the actual folder and file names

import './App.css'

function App() {
  const [currency, setCurrency] = useState("inr");

  return (
    <>
      <GlobalContext.Provider value={{ currency, setCurrency }}>
        <Routing />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
