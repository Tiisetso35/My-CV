import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import References from './components/References';
import Footer from './components/Footer';
import { person, education, skills, experience, projects, references } from './data/cvData';
import './App.css';

function App() {
  // useState: these two values remember if the sections are shown or hidden
  const [showSkills, setShowSkills] = useState(true);
  const [showReferences, setShowReferences] = useState(true);

  // useEffect: runs once when the page loads and changes the browser tab title
  useEffect(() => {
    document.title = 'My CV - ' + person.name;
  }, []);

  // Event handler functions
  function handleShowSkills() {
    setShowSkills(!showSkills);
  }

  function handleShowReferences() {
    setShowReferences(!showReferences);
  }

  // Opens the browser print window, where the CV can be saved as a PDF file
  function handleDownload() {
    window.print();
  }

  return (
    <div className="app">
      <Header name={person.name} title={person.title} onDownload={handleDownload} />

      <main className="container">
        <Profile person={person} />
        <Contact email={person.email} phone={person.phone} location={person.location} />
        <Education items={education} />
        <Skills items={skills} show={showSkills} onToggle={handleShowSkills} />
        <Experience items={experience} />
        <Projects items={projects} />
        <References items={references} show={showReferences} onToggle={handleShowReferences} />
      </main>

      <Footer name={person.name} email={person.email} phone={person.phone} />
    </div>
  );
}

export default App;
