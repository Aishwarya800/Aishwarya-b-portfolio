import styles from "./App.module.css";
import { About } from "./components/About/About";
import MyChatbot from "./components/chatbot/Chatbot";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Resume  from "./components/Resume/Resume";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Experience />
      <Projects />
      <Contact />
      <MyChatbot />
      
      
      
    </div>
  );
}

export default App;
