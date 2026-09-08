function Header({ name, theme, onToggleTheme, onPrint }) {
  const links = [
    { href: '#profile', label: 'Profile' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#references', label: 'References' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <span className="brand">{name}</span>

        <nav className="nav" aria-label="Curriculum vitae sections">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="btn" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button type="button" className="btn btn-primary" onClick={onPrint}>
            Print CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
