import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// import frontend secondary components
import ClockApp from "./components/SecondaryComponents/FrontEnd/25-5-Clock-main/src/App";
import { JSCALC } from "./components/SecondaryComponents/FrontEnd/JSCalculator-main/src/JSCALC";
import { DrumMachine } from "./components/SecondaryComponents/FrontEnd/DrumMachine-main/src/drumMachine";
import RandomQuoteGenerator from "./components/SecondaryComponents/FrontEnd/RandomQuoteGenerator-main/src/RandomQuoteGenerator_App";
import TO_DO_APP from "./components/SecondaryComponents/FrontEnd/To-Do-App/src/TO_DO_APP";

// import fullstack secondary components

// import projects sections
import FrontEnd from "./components/SecondaryComponents/FrontEnd/FrontEnd";
import BackEnd from "./components/SecondaryComponents/BackEnd/Backend"
import Fullstack from "./components/SecondaryComponents/Fullstack/Fullstack"

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
        {/* Projects routes */}
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/backend" element={<BackEnd />} />
        <Route path="/fullstack" element={<Fullstack />} />
        {/* FrontEnd routes */}
        <Route path="/frontend/to_do_list" element={<TO_DO_APP />} />
        <Route path="/frontend/clock" element={<ClockApp />} />
        <Route path="/frontend/calculator" element={<JSCALC />} />
        <Route path="/frontend/drum" element={<DrumMachine />} />
        <Route path="/frontend/randomquotes" element={<RandomQuoteGenerator />} />
        {/* Fullstack routes */}
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
);
reportWebVitals();
