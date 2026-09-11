// Profile shows a short summary about me
function Profile({ summary }) {
  return (
    <section className="section" id="profile">
      <h2>Profile</h2>
      <div className="card">
        <p>{summary}</p>
      </div>
    </section>
  );
}

export default Profile;
