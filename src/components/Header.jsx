// Header shows my name, my title, the menu and the Download CV button
function Header({ name, title, onDownload }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{title}</p>

      <nav className="nav">
        <a href="#profile">Profile</a>
        <a href="#contact">Contact</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
      </nav>

      <button className="button" onClick={onDownload}>
        Download CV
      </button>
    </header>
  );
}

export default Header;
