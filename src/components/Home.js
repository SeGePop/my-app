// HOME CONTENT
import profile from "../images/profile.jpg"
export default function Home() {
    return (
      <section class="home_content" id="home_content">
        <img loading="lazy" src={profile} alt="profile" class="circle" />
        <h1>User friendly, user first websites.</h1>
        Hello! My name is <span>Pop Sergiu George</span>, and welcome to my
        website!
        <p>
          I am a web developer from Romania and currently living in Bihor county.
          I enjoy building everything from small business sites to rich
          interactive web apps. If you are a business seeking a web presence or an
          employer you can get in touch with me{" "}
          <a href="#contact_content">here</a>.
        </p>
        <p>
          After 10 years of working as a mechanical engineer, working in both 2D
          and 3D design, being delegated for months at a time abroad, and managing
          a 3 month long project coordinating up to 10 people, I have decided to
          shift my focus on what I've always been passionate about, telling
          computers what to do and how to think.
          
          <div class="warning">
          <p>
          <strong>THIS WEBSITE IS UNDER DEVELOPMENT!</strong>
          </p>
          <p>
          <strong>HAPPY HOLIDAYS!</strong>
          </p>
          </div>         
        </p>
        <div class="home_email">
          <a href="mailto:sergiugeorgepop@gmail.com" id="home_mail">
            Let's discuss via e-mail<strong>&#10132;</strong>
          </a>
        </div>
      </section>
    );
  }  