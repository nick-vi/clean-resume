import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Heading from './components/Heading';
import Page from './components/Page';
import Projects from './components/Projects';
import Skills from './components/Skills';

export const ICON_SIZE = 24;

export function App() {
  return (
    <div className="bg-gray-200 text-gray-800">
      <Page>
        <Heading />
        <ContactInfo />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </Page>
    </div>
  );
}
