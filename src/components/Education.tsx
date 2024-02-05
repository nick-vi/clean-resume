import Section from './Section';
import resumeData from '../data.json';

export default function Education() {
  const { education } = resumeData;

  if (education.length === 0) return null;

  return (
    <Section title="Education">
      <div className="space-y-2">
        {education.map((job) => (
          <div key={job.degree} className="space-y-2">
            <div className="">
              <div>
                <p className="text-xs">{job.dates}</p>
              </div>
              <h3 className="font-bold">
                {job.degree} - <span className="font-medium">{job.school}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
