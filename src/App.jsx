import AboutMe from "./features/abouteMe/AboutMe";
import Portfolio from "./features/portfolio/Portfolio";
import Skills from "./features/skills/Skills";
import Education from "./features/education/Education";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <div className="appContainer">
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
