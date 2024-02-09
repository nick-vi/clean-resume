import Section from './Section';
import resumeData from '../data.json';

export default function Experience() {
  const { skills } = resumeData;

  if (skills.length === 0) return null;

  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) =>
          skill.items.map((item) => (
            <span
              key={item}
              className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-2xs border border-gray-300"
            >
              {item}
            </span>
          ))
        )}
      </div>
    </Section>
  );
}
