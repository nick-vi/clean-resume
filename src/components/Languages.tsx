import data from '../data';
import Section from './Section';

export default function Languages() {
  const { languages } = data;

  return (
    languages &&
    languages.length > 0 && (
      <Section title="Languages">
        <p>
          {languages
            .map(
              (language) =>
                `${language.language} (${language.proficiency.toLowerCase()})`
            )
            .join(', ')}
        </p>
      </Section>
    )
  );
}
