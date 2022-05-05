import AboutMe from "./sections/abouteMe/AboutMe";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/skills/Skills";
import Education from "./sections/education/Education";
import Contact from "./sections/contact/Contact";

import './app.css'

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
