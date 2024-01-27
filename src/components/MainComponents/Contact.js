import { SocialIcon } from "react-social-icons";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation("global");
  return (
    <section className="contact_content" id="contact_content">
      <div className="contact_info">
        <div className="contacts-container">
          <h1>{t("contact.title")}</h1>
          <div className="columns">
            <div className="left_column">
              <ul>
                <li>
                  <i>{t("contact.hiring")}</i>{t("contact.hiring_text")}</li>
                <p></p>
                <li>
                  <i>{t("contact.contracting")}</i>{t("contact.contracting_text")}</li>
              </ul>

              <div className="contacts-element"></div>
              <div>
                <span className="contacts-item">E: </span>
                <a
                  href="mailto:sergiugeorgepop@gmail.com"
                  className="contacts-email"
                >
                  sergiugeorgepop@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="social_buttons">
            <div></div>
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              url="https://linkedin.com"
              href="https://www.linkedin.com/in/sergiu-george-pop-0a9097260/"
              target="_blank"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              network="github"
              href="https://github.com/SeGePop"
              target="_blank"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              url="https://twitter.com"
              href="https://twitter.com/SeGePop"
              target="_blank"
            />
            <div></div>
          </div>
          <div className="right_column"></div>
        </div>
      </div>
    </section>
  );
}
