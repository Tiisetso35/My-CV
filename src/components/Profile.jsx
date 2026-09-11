// Profile shows my picture and a short summary about me
function Profile({ photo, name, summary }) {
  return (
    <section className="section" id="profile">
      <h2>Profile</h2>
      <div className="card">
        <img className="photo" src={photo} alt={name} />
        <p>{summary}</p>
      </div>
    </section>
  );
}

export default Profile;
