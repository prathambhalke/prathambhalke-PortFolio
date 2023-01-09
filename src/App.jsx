import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import EdSkill from "./Components/EdSkill";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <EdSkill />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
