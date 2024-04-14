import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import frontend from "../../images/frontend.jpeg";
import backend from "../../images/backend.jpeg";
import fullstack from "../../images/fullstack.jpeg"

export default function Projects() {
  const [t] = useTranslation("global");
  return (
    <section className="projects_content" id="projects_content">
      <h1>Projects</h1>

      <div className="gallery">
        <a target="_blank" href="/frontend">
          <img loading="lazy" src={frontend} alt="FrontEnd" />
        </a>
        <div className="desc">
          FrontEnd
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank" href="/backend">
          <img loading="lazy" src={backend} alt="BackEnd" />
        </a>
        <div className="desc">
          BackEnd
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="gallery">
        <a target="_blank" href="/fullstack">
          <img
            loading="lazy"
            className="image"
            src={fullstack}
            alt="Fullstack"
          />
        </a>
        <div className="desc">
          Fullstack
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
}
