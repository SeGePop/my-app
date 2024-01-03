import logo from "../../images/logo.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
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
    <div class="topbar">
      <div className="topnav">
        <a
          href="#home_content"
          className={`btn ${activeButton === "HOME" ? "active" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          {t("navbar.home")}
        </a>
        <a
          href="#credentials_content"
          className={`btn ${activeButton === "CREDENTIALS" ? "active" : ""}`}
          onClick={() => handleButtonClick("CREDENTIALS")}
        >
          {t("navbar.credentials")}
        </a>

        <a
          href="#projects_content"
          className={`btn ${activeButton === "PROJECTS" ? "active" : ""}`}
          onClick={() => handleButtonClick("PROJECTS")}
        >
          {t("navbar.projects")}
        </a>

        <a
          href="#contact_content"
          className={`btn ${activeButton === "CONTACT" ? "active" : ""}`}
          onClick={() => handleButtonClick("CONTACT")}
        >
          {t("navbar.contact")}
        </a>
      <button className="language_buttons" onClick={handleClick}>
      {language === "en" ? "EN" : "RO"}
    </button>
        <img loading="lazy" src={logo} alt="Segepop" class="logo" />
      </div>
    </div>
  );
}
