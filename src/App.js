import logo from './images/logo.png';
import profile from './images/profile.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* TOP BAR */}
    <section class="topbar">
        <div class="logo_area">


        </div>
        <div class="topnav" id="topnav">
            <img src={logo} alt="Segepop" class="logo"/>
            <a href="#contact_content">CONTACT</a>
            <a href="#projects_content">PROJECTS</a>
            <a class="active" href="#home_content">HOME</a>
        </div>
    </section>
    {/* PAGE CONTENT */}
    
    {/* HOME CONTENT */}
    <section class="home_content" id="home_content">
        <img src={profile} alt="profile" class="circle"/>
        <h1>User friendly, user first websites.</h1>
        Hello! My name is <span>Pop Sergiu George</span>, and welcome to my website!
        <p>I am a web developer from Romania and currently living in Bihor county.
            I enjoy building everything from small business sites to rich interactive web apps.
            If you are a business seeking a web presence or an employer you can get in touch with me <a
                href="#contact">here</a>.</p>
        <p>After 10 years of working as a mechanical engineer, working in both 2D and 3D design, being delegated for
            months at a time abroad, and managing a 3 month long project coordinating up to 10 people, I have decided to
            shift my focus on what I've always been passionate about, telling computers what to do and how to think.</p>
        <div class="home_email">
            <a href='mailto:sergiugeorgepop@gmail.com' id="home_mail">I'm looking to hire <strong>&#10132;</strong></a>
        </div>
    </section>
    {/* PROJECTS CONTENT */}
    <section class="projects_content" id="projects_content">

        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
</main>
    </section>

    </div>
  );
}

export default App;
