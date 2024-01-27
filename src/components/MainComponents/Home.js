import { useTranslation } from "react-i18next";
import profile from "../../images/profile.jpg";

export default function Home() {
  const [t] = useTranslation("global");
  
    return (
      <section className="home_content" id="home_content">
        <img loading="lazy" src={profile} alt="profile" className="circle" />
        <h1>{t("home.h1")}</h1>
        {t("home.welcome1")}<span>{t("home.name")}</span>{t("home.welcome2")}
        <p>{t("home.p1")}</p>
        <p><span>{t("home.p2")}</span></p>
        <div className="home_email">
          <a href="mailto:sergiugeorgepop@gmail.com" id="home_mail">
          <p>{t("home.e-mail")}</p>
          </a>
        </div>
      </section>
    );
  }
  