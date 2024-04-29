import data from '../../data';
import Section from '../Section';
import { formatDates } from '../../utils';
import ReactMarkdown from 'react-markdown';

export default function Experience() {
  const { experience } = data;

  if (!experience || experience.length === 0) return null;

  return (
    <Section title="Experience">
      <div className="space-y-2">
        {experience.map((job) => (
          <div key={job.company} className="space-y-0.5">
            <div>
              <p className="text-xs">
                {formatDates(job.startDate, job.endDate)}
              </p>
            </div>
            <h3 className="font-bold">
              {job.company} -{' '}
              <span className="font-medium">{job.position}</span>
            </h3>
            <ReactMarkdown>{job.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Section>
  );
}
