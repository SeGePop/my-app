import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function Fullstack() {
  const [t] = useTranslation("global");
  return (
    <section className="under_construction">
      <h1>Under Construction</h1>
    </section>
  );
}
