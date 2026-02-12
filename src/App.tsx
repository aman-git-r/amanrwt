import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Story } from "./components/Story";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Story />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
