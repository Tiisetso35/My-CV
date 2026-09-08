function Footer({ name, contact, year }) {
  return (
    <footer className="footer">
      <p className="footer-name">{name}</p>
      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a> &middot; {contact.phone} &middot; {contact.location}
      </p>
      <p className="copyright">&copy; {year} {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
