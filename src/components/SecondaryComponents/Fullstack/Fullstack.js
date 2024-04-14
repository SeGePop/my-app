import exerciseTracker from "../../../images/exerciseTracker.jpeg"
import { SocialIcon } from "react-social-icons";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function Fullstack() {
  const [t] = useTranslation("global");
  return (
    <section className="projects_content" id="projects_content">
      <h1>Projects</h1>

      <div className="gallery">
        <a target="_blank" href="/backend/exerciseTracker">
          <img loading="lazy" src={exerciseTracker} alt="Exercise Tracker" />
        </a>
        <div className="desc">
          {t("projects.exercise")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/boilerplate-project-exercisetracker"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}
