// Contact shows my email, phone and where I stay
function Contact({ email, phone, location }) {
  return (
    <section className="section" id="contact">
      <h2>Contact Information</h2>
      <div className="card">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Location: {location}</p>
      </div>
    </section>
  );
}

export default Contact;
