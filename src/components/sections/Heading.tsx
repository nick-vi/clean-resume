import data from '../../data';
import Section from '../Section';

export default function Heading() {
  const { fullName, title } = data;

  return (
    <Section divider>
      <h1 className="space-x-2">
        <span className="text-2xl font-bold">{fullName}</span>
        {title && <span className="text-2xl font-light">{title}</span>}
      </h1>
    </Section>
  );
}
