// Footer shows my name, my contacts and the copyright
function Footer({ name, email, phone }) {
  return (
    <footer className="footer">
      <p>{name}</p>
      <p>
        {email} | {phone}
      </p>
      <p>Copyright 2026 {name}</p>
    </footer>
  );
}

export default Footer;
