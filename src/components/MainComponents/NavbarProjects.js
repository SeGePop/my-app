import logo from "../../images/logo.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavbarProjects() {
  const [language, setLanguage] = useState("en");

  const handleClick = () => {
    if (language === "en") {
      setLanguage("ro");
      handleChangeLanguage("ro");
    } else {
      setLanguage("en");
      handleChangeLanguage("en");
    }
  };
// Switch between EN and RO button


  const [t, i18n] = useTranslation("global");
  
  const handleChangeLanguage = (lang:String) =>
  {
    i18n.changeLanguage(lang);
  }

  const [activeButton, setActiveButton] = useState("HOME");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="topbar_projects">
      <div className="topnav_projects">
        <a
          href="/"
          className={`btn ${activeButton === "HOME" ? "active" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          {t("navbar_projects.home")}
        </a>
        
      <button className="language_buttons" onClick={handleClick}>
      {language === "en" ? "EN" : "RO"}
    </button>
        <img loading="lazy" src={logo} alt="Segepop" className="logo" />
      </div>
    </div>
  );
}
