import Section from './Section';
import resumeData from '../data.json';

export default function About() {
  const { aboutMe } = resumeData;

  if (!aboutMe) return null;

  const paragraphs = aboutMe.split('\n');

  return (
    <Section title="About me">
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
