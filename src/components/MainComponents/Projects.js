import clock from "../../images/25+5_clock.jpg";
import calculator from "../../images/calculator.jpeg";
import drum_machine from "../../images/drum_machine.jpeg";
import random_quote from "../../images/random_quote.jpeg";
import { SocialIcon } from "react-social-icons";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [t, i18n] = useTranslation("global");
  return (
    <section class="projects_content" id="projects_content">
      <h1>Projects</h1>
      <div class="gallery">
        <a target="_blank" href="/clock">
          <img loading="lazy" src={clock} alt="25+5 Clock" />
        </a>
        <div class="desc">
          {t("projects.clock")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/25-5-Clock"
            target="_blank"
          />
        </div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/calculator">
          <img loading="lazy" class="image" src={calculator} alt="Calculator" />
        </a>
        <div class="desc">
        {t("projects.calculator")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/JSCalculator"
            target="_blank"
          />
        </div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/drum">
          <img
            loading="lazy"
            class="image"
            src={drum_machine}
            alt="Drum Machine"
          />
        </a>
        <div class="desc">
          {t("projects.piano")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/DrumMachine"
            target="_blank"
          />
        </div>
      </div>

      <div class="gallery">
        <a target="_blank" href="/randomquotes">
          <img loading="lazy" src={random_quote} alt="Random Quote Generator" />
        </a>
        <div class="desc">
          {t("projects.quote")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/RandomQuoteGenerator"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}
