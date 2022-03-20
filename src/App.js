import AboutMe from "./layouts/AboutMe";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";
import Education from "./layouts/Education";
import Portfolio from "./layouts/Portfolio";

import "./App.css"

function App() {
  return (
    <div className="container">
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
