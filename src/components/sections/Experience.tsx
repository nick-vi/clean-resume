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
          <div key={job.company} className="space-y-1">
            <div>
              <p className="text-xs border px-2 py-0.5 rounded-md inline font-medium">
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
