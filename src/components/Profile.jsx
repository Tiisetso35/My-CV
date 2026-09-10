// Profile: shows the photo and the short professional summary.
// The whole person object is received as one prop.
function Profile({ person }) {
  return (
    <section className="section" id="profile">
      <h2>Profile</h2>
      <div className="card profile">
        <img className="photo" src={person.photo} alt={person.name} />
        <p>{person.summary}</p>
      </div>
    </section>
  );
}

export default Profile;
