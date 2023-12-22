import logo from "./images/logo.png";
import profile from "./images/profile.jpg";
import "./App.css";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

// NAVBAR
function Navbar() {
  const [activeButton, setActiveButton] = useState("HOME");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div class="topbar">
      <div className="topnav">
        <img src={logo} alt="Segepop" class="logo" />
        <a
          href="#contact_content"
          className={`btn ${activeButton === "CONTACT" ? "active" : ""}`}
          onClick={() => handleButtonClick("CONTACT")}
        >
          CONTACT
        </a>
        <a
          href="#projects_content"
          className={`btn ${activeButton === "PROJECTS" ? "active" : ""}`}
          onClick={() => handleButtonClick("PROJECTS")}
        >
          PROJECTS
        </a>
        <a
          href="#home_content"
          className={`btn ${activeButton === "HOME" ? "active" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          HOME
        </a>
      </div>
    </div>
  );
}

// HOME CONTENT
function Home() {
  return (
    <section class="home_content" id="home_content">
      <img src={profile} alt="profile" class="circle" />
      <h1>User friendly, user first websites.</h1>
      Hello! My name is <span>Pop Sergiu George</span>, and welcome to my
      website!
      <p>
        I am a web developer from Romania and currently living in Bihor county.
        I enjoy building everything from small business sites to rich
        interactive web apps. If you are a business seeking a web presence or an
        employer you can get in touch with me <a href="#contact">here</a>.
      </p>
      <p>
        After 10 years of working as a mechanical engineer, working in both 2D
        and 3D design, being delegated for months at a time abroad, and managing
        a 3 month long project coordinating up to 10 people, I have decided to
        shift my focus on what I've always been passionate about, telling
        computers what to do and how to think.
      </p>
      <div class="home_email">
        <a href="mailto:sergiugeorgepop@gmail.com" id="home_mail">
          I'm looking to hire <strong>&#10132;</strong>
        </a>
      </div>
    </section>
  );
}
// PROJECT CONTENT
function Projects() {
  return (
    <section class="projects_content" id="projects_content">
      <input type="radio" name="position" checked />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </main>
    </section>
  );
}

// CONTACT CONTENT
function Contact() {
  return (
    <section class="contact_content" id="contact_content">
      <div class="contact_info">
        <div class="contacts-container">
          <h1>Get in touch!</h1>
          <div class="columns">
          <div class="left_column">
          <h1>How Can I Help You?</h1>
          <ul>
            <li><i>Hiring?</i> Let’s discuss your project requirements, goals, and timeline. I’m excited to collaborate and create something amazing together.</li>
            <p></p>
            <li><i>Contracting?</i> Need a reliable developer for a specific task or ongoing support? Look no further—I’m here to assist.</li>
          </ul>
          
<div class="contacts-element">
            <span class="contacts-item">C: </span>
            <a href="tel:+400770113529" class="contacts-phone">
              +40 0770 113 529
            </a>
          </div>
          <div>
            <span class="contacts-item">E: </span>
            <a href="mailto:sergiugeorgepop@gmail.com" class="contacts-email">
              sergiugeorgepop@gmail.com
            </a>
          </div>
        </div>
        
          </div>
          <div class="social_buttons">
            <div></div>
        <SocialIcon
          style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            url="https://linkedin.com"
            href="https://www.linkedin.com/in/sergiu-george-pop-0a9097260/"
          />
          <SocialIcon
          style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop"
          />
          <SocialIcon
          style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            url="https://twitter.com"
            href="https://twitter.com/SeGePop"
          />  
          <div></div>
          </div>
          <div class="right_column">
        </div>
          </div>
          
          

      </div>
    </section>
  );
}

// APP ITSELF
function App() {
  return (
    <div className="App">
      {/* TOP BAR */}
      <Navbar />
      <div className="website">
        {/* HOME CONTENT */}
        <Home />
        {/* PROJECTS CONTENT */}
        <Projects />
        {/* CONTACT CONTENT */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
