import Section from './Section';
import resumeData from '../data.json';

export default function Experience() {
  const { skills } = resumeData;

  if (skills.length === 0) return null;

  const categorizedSkills = typeof skills[0] === 'object';

  return (
    <Section title="Skills">
      {categorizedSkills
        ? skills.map(({ name, items }) => (
            <>
              <h2 className="block font-semibold">{name}</h2>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-2xs border border-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          ))
        : skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-2xs border border-gray-300"
            >
              {skill}
            </span>
          ))}
    </Section>
  );
}
