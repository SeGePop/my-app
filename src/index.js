import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ClockApp from "./components/25-5-Clock-main/src/App";
import { DrumMachine_App } from "./components/DrumMachine-main/src/DrumMachine_App";
import { JSCalculator_App } from "./components/JSCalculator-main/src/JSCalculator_App";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator-main/src/RandomQuoteGenerator_App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/clock" element={<ClockApp />} />
      <Route path="/drum" element={<DrumMachine_App />} />
      <Route path="/calculator" element={<JSCalculator_App />} />
      <Route path="/randomquotes" element={<RandomQuoteGenerator />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
