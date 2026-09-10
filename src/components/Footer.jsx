// Footer: shows the name, the contact information and the copyright line.
function Footer({ name, email, phone }) {
  return (
    <footer className="footer">
      <p className="footer-name">{name}</p>
      <p>
        {email} | {phone}
      </p>
      <p>&copy; 2026 {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
