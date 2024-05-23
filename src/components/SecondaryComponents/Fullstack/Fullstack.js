import commerce from "../../../images/e-commerce.jpeg"
import { SocialIcon } from "react-social-icons";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import NavbarProjects from "../../MainComponents/NavbarProjects";

export default function FullStack() {
  const [t] = useTranslation("global");
  return (
    <section className="fullstack_projects_content" id="fullstack_projects_content">
      <NavbarProjects />
      <div className="fullstack_gallery">
        <a href="/fullstack/commerce">
          <img loading="lazy" src={commerce} alt="e-commerce" />
        </a>
        <div className="fullstack_desc">
          {t("projects.commerce")}
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href=""
            target="_blank"
          />
        </div>
      </div>      {/* spacing fix */}
      <div></div>
    </section>
  );
}
