import "./App.css";
import Navbar from "./components/MainComponents/Navbar";
import Home from "./components/MainComponents/Home";
import Credentials from "./components/MainComponents/Credentials";
import Projects from "./components/MainComponents/Projects";
import Contact from "./components/MainComponents/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="website">
        <Home />
        <Credentials />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
