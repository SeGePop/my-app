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
import global_en from "./translations/en/global.json";
import global_ro from "./translations/ro/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ro: {
      global: global_ro,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clock" element={<ClockApp />} />
        <Route path="/drum" element={<DrumMachine_App />} />
        <Route path="/calculator" element={<JSCalculator_App />} />
        <Route path="/randomquotes" element={<RandomQuoteGenerator />} />
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
);
reportWebVitals();
