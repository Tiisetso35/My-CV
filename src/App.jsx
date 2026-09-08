import { useEffect, useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import References from './components/References';
import Footer from './components/Footer';
import { contact, education, experience, profile, projects, references, skills } from './data/cvData';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [skillsVisible, setSkillsVisible] = useState(true);
  const [referencesVisible, setReferencesVisible] = useState(false);
  const [interactions, setInteractions] = useState(0);

  useEffect(() => {
    document.title = `${profile.fullName} | ${profile.title}`;
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const countInteraction = () => setInteractions((current) => current + 1);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    countInteraction();
  };

  const toggleSkills = () => {
    setSkillsVisible((visible) => !visible);
    countInteraction();
  };

  const toggleReferences = () => {
    setReferencesVisible((visible) => !visible);
    countInteraction();
  };

  const printCv = () => {
    countInteraction();
    window.print();
  };

  return (
    <div className="app">
      <Header name={profile.fullName} theme={theme} onToggleTheme={toggleTheme} onPrint={printCv} />

      <main className="page">
        <Profile profile={profile} contact={contact} interactions={interactions} />
        <Education items={education} />
        <Skills items={skills} visible={skillsVisible} onToggle={toggleSkills} />
        <Experience items={experience} />
        <Projects items={projects} />
        <References items={references} visible={referencesVisible} onToggle={toggleReferences} />
      </main>

      <Footer name={profile.fullName} contact={contact} year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
