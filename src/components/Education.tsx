import data from '../data';
import { formatDates } from '../utils';
import Section from './Section';

export default function Education() {
  const { education } = data;

  if (!education || education.length === 0) return null;

  return (
    <Section title="Education">
      <div className="space-y-2">
        {education.map((record) => (
          <div key={record.degree} className="space-y-2">
            <div className="">
              <div>
                <p className="text-xs">
                  {formatDates(record.startDate, record.endDate)}
                </p>
              </div>
              <h3 className="font-bold">
                {record.degree} -{' '}
                <span className="font-medium">{record.institution}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
