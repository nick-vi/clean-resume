import Section from './Section';
import resumeData from '../data.json';

export default function Experience() {
  const { experience } = resumeData;

  if (experience.length === 0) return null;

  return (
    <Section title="Experience">
      <div className="space-y-2">
        {experience.map((job) => (
          <div key={job.company} className="space-y-1">
            <div className="">
              <div>
                <p className="text-xs">{job.dates}</p>
              </div>
              <h3 className="font-bold">
                {job.company} - <span className="font-medium">{job.title}</span>
              </h3>
            </div>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
