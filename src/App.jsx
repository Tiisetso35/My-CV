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
  // useState keeps the skills and the references shown or hidden
  const [showSkills, setShowSkills] = useState(true);
  const [showReferences, setShowReferences] = useState(true);

  // useEffect changes the title of the browser tab when the page opens
  useEffect(() => {
    document.title = 'My CV - ' + person.name;
  }, []);

  function handleShowSkills() {
    setShowSkills(!showSkills);
  }

  function handleShowReferences() {
    setShowReferences(!showReferences);
  }

  // window.print() opens the print window, there I choose Save as PDF
  function handleDownload() {
    window.print();
  }

  return (
    <div>
      <Header name={person.name} title={person.title} onDownload={handleDownload} />

      <div className="container">
        <Profile summary={person.summary} />
        <Contact email={person.email} phone={person.phone} location={person.location} />
        <Education items={education} />
        <Skills items={skills} show={showSkills} onToggle={handleShowSkills} />
        <Experience items={experience} />
        <Projects items={projects} />
        <References items={references} show={showReferences} onToggle={handleShowReferences} />
      </div>

      <Footer name={person.name} email={person.email} phone={person.phone} />
    </div>
  );
}

export default App;
