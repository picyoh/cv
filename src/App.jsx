import AboutMe from "./features/abouteMe/AboutMe";
import Portfolio from "./features/portfolio/Portfolio";
import Skills from "./features/skills/Skills";
import Education from "./features/education/Education";
import Contact from "./features/contact/Contact";

import './App.css'

function App() {
  return (
    <article className="app">
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </article>
  );
}

export default App;
