function Profile({ profile, contact, interactions }) {
  return (
    <section className="profile" id="profile">
      <img className="avatar" src={profile.photo} alt={`Portrait of ${profile.fullName}`} />

      <div className="profile-body">
        <h1>{profile.fullName}</h1>
        <p className="job-title">{profile.title}</p>
        <p className="summary">{profile.summary}</p>

        <ul className="contact-list">
          <li>
            <span className="label">Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span className="label">Phone</span>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          </li>
          <li>
            <span className="label">Location</span>
            <span>{contact.location}</span>
          </li>
          <li>
            <span className="label">GitHub</span>
            <a href={contact.github} target="_blank" rel="noreferrer">
              {contact.github.replace('https://', '')}
            </a>
          </li>
        </ul>

        <p className="visits">Interactions in this session: {interactions}</p>
      </div>
    </section>
  );
}

export default Profile;
