// Contact: shows the email, phone number and location.
// Each one is received as its own prop from App.
function Contact({ email, phone, location }) {
  return (
    <section className="section" id="contact">
      <h2>Contact Information</h2>
      <div className="card">
        <p>
          <strong>Email: </strong>
          <a href={'mailto:' + email}>{email}</a>
        </p>
        <p>
          <strong>Phone: </strong>
          {phone}
        </p>
        <p>
          <strong>Location: </strong>
          {location}
        </p>
      </div>
    </section>
  );
}

export default Contact;
