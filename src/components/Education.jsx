import Section from './Section';

function Education({ items }) {
  return (
    <Section id="education" title="Education">
      <ul className="timeline">
        {items.map((item) => (
          <li key={item.id} className="card">
            <div className="card-head">
              <h3>{item.qualification}</h3>
              <span className="period">{item.years}</span>
            </div>
            <p className="organisation">{item.institution}</p>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Education;
