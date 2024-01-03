import { useTranslation } from "react-i18next";
import profile from "../../images/profile.jpg";

export default function Home() {
  const [t,i18n] = useTranslation("global");
  
    return (
      <section class="home_content" id="home_content">
        <img loading="lazy" src={profile} alt="profile" class="circle" />
        <h1>{t("home.h1")}</h1>
        {t("home.welcome1")}<span>{t("home.name")}</span>{t("home.welcome2")}
        <p>{t("home.p1")}</p>
        <p><p>{t("home.p2")}</p></p>
        <div class="home_email">
          <a href="mailto:sergiugeorgepop@gmail.com" id="home_mail">
          <p>{t("home.e-mail")}</p>
          </a>
        </div>
      </section>
    );
  }
  