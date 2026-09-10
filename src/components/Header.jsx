// Header: shows the name, the professional title, the navigation links
// and the Print CV button. The name, title and onPrint come from App as props.
function Header({ name, title, onPrint }) {
  return (
    <header className="header">
      <div className="header-top">
        <div>
          <h1 className="header-name">{name}</h1>
          <p className="header-title">{title}</p>
        </div>
        <button className="button" onClick={onPrint}>
          Print CV
        </button>
      </div>

      <nav className="nav">
        <a href="#profile">Profile</a>
        <a href="#contact">Contact</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
      </nav>
    </header>
  );
}

export default Header;
