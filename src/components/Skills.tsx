import data from '../data';
import { type CategorizedSkills } from '../types';
import Section from './Section';

function isCategorizedSkills(item: any): item is CategorizedSkills {
  return (
    typeof item === 'object' &&
    item !== null &&
    'name' in item &&
    'items' in item &&
    Array.isArray(item.items) &&
    item.items.every((i: any) => typeof i === 'string')
  );
}

function isString(item: any): item is string {
  return typeof item === 'string';
}

export default function Experience() {
  const { skills } = data;

  if (!skills || skills.length === 0) return null;

  const generalSkills = skills.filter(isString);
  const categorizedSkills = skills.filter(isCategorizedSkills);

  if (generalSkills.length === 0 && categorizedSkills.length === 0) {
    return null;
  }

  return (
    <Section title="Skills">
      {generalSkills.length > 0 && (
        <div key={name} className="space-y-1">
          {categorizedSkills.length > 0 && (
            <h2 className="block font-semibold">General</h2>
          )}
          <div className="flex flex-wrap gap-1">
            {generalSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs border border-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      {categorizedSkills.map(({ name, items }) => (
        <div key={name} className="space-y-1">
          <h2 className="block font-semibold">{name}</h2>
          <div className="flex flex-wrap gap-1">
            {items.map((item) => (
              <span
                key={item}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs border border-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
