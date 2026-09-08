import Section from './Section';

function Experience({ items }) {
  return (
    <Section id="experience" title="Work Experience">
      <ul className="timeline">
        {items.map((job) => (
          <li key={job.id} className="card">
            <div className="card-head">
              <h3>{job.position}</h3>
              <span className="period">{job.period}</span>
            </div>
            <p className="organisation">{job.organisation}</p>
            <ul className="bullets">
              {job.responsibilities.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Experience;
