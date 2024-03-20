import ReactMarkdown from 'react-markdown';
import data from '../../data';
import Section from '../Section';

export default function About() {
  const { aboutMe } = data;

  if (!aboutMe) return null;

  return (
    <Section title="About me">
      <div className="prose space-y-4">
        <ReactMarkdown>{aboutMe}</ReactMarkdown>
      </div>
    </Section>
  );
}
