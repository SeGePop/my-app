import { useTranslation } from "react-i18next";
import profile from "../../images/profile.jpg";
import CV_EN from "../../files/CV_EN.pdf";

export default function Home() {
  const [t] = useTranslation("global");

  return (
    <section className="home_content" id="home_content">
      <img loading="lazy" src={profile} alt="profile" className="circle" />
      <h1>{t("home.h1")}</h1>
      {t("home.welcome1")}
      <span>{t("home.name")}</span>
      {t("home.welcome2")}
      <p>{t("home.p1")}</p>
      <p>
        <span>{t("home.p2")}</span>
      </p>
      <div className="personal_cv">
        <a href={CV_EN} download="Sergiu-George Pop.pdf" id="personal_cv">
          <p>{t("home.resume")}</p>
        </a>
      </div>
    </section>
  );
}
