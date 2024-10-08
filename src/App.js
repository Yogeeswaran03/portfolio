import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
          <Header/>
          <Hero/>
          <About/>
          <Project/>
          <Skills/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
