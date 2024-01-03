import { Slide } from "react-slideshow-image";
import image1 from "../../images/certificates/front-end-development-libraries.jpeg";
import image2 from "../../images/certificates/javascript-algorithms-and-data-structures.jpeg";
import image3 from "../../images/certificates/responsive-web-design.jpeg";
import { useTranslation } from "react-i18next";

export default function Credentials() {
  const images = [image1, image2, image3];
  const [t, i18n] = useTranslation("global");

  return (
    <section className="credentials_content" id="credentials_content">
      <div className="experience">
        <h1>{t("credentials.top-skills")}</h1>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Front-End Development</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>

        <h2>{t("credentials.certifications")}</h2>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Segepop/responsive-web-design"
              target="_blank"
            >
              Responsive Web Design
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Segepop/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              JavaScript Algorithms and Data Structures
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/certification/Segepop/front-end-development-libraries"
              target="_blank"
            >
              Front End Development Libraries
            </a>
          </li>
        </ul>
      </div>
      <div className="diplomas">
        <Slide>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
