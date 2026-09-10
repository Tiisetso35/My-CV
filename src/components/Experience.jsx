// Experience: shows the position, the organisation and the
// list of responsibilities for each job received in the items prop.
function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <h2>Work Experience</h2>
      {items.map((job) => (
        <div className="card" key={job.position}>
          <h3>{job.position}</h3>
          <p className="highlight">{job.organisation}</p>
          <ul>
            {job.responsibilities.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
