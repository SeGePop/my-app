import "./App.css";
import Navbar from "./components/MainComponents/Navbar";
import Home from "./components/MainComponents/Home";
import Credentials from "./components/MainComponents/Credentials";
import Projects from "./components/MainComponents/Projects";
import Contact from "./components/MainComponents/Contact";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="website">
        <Home />
        <hr></hr>
        <Credentials />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Contact />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
