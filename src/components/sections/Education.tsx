import data from '../../data';
import { formatDates } from '../../utils';
import Section from '../Section';

export default function Education() {
  const { education } = data;

  if (!education || education.length === 0) return null;

  return (
    <Section title="Education">
      <div className="space-y-2">
        {education.map((record) => (
          <div key={record.degree} className="space-y-1">
            <div>
              <p className="text-xs border px-2 py-0.5 rounded-md inline font-medium">
                {formatDates(record.startDate, record.endDate, 'Ongoing')}
              </p>
            </div>
            <h3 className="font-bold">
              {record.degree} -{' '}
              <span className="font-medium">{record.institution}</span>
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
