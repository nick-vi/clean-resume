import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Page from './components/Page';
import Projects from './components/Projects';
import Section from './components/Section';
import Skills from './components/Skills';
import resumeData from './data.json';

export const ICON_SIZE = 24;

export function App() {
  const { fullName, title, languages } = resumeData;

  return (
    <div className="bg-gray-200 text-gray-800">
      <Page>
        <Section divider>
          <h1 className="space-x-2">
            <span className="text-2xl font-bold">{fullName}</span>
            <span className="text-2xl font-light">{title}</span>
          </h1>
        </Section>
        <ContactInfo />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        {languages && languages.length > 0 && (
          <Section title="Languages">
            <p>
              {languages
                .map(
                  (language) =>
                    `${
                      language.language
                    } (${language.proficiency.toLowerCase()})`
                )
                .join(', ')}
            </p>
          </Section>
        )}
      </Page>
    </div>
  );
}
