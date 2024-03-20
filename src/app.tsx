import Page from './components/Page';
import {
  About,
  ContactInfo,
  Education,
  Experience,
  Heading,
  Languages,
  Projects,
  Skills,
} from './components/sections';

export function App() {
  return (
    <Page>
      <Heading />
      <ContactInfo />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Languages />
    </Page>
  );
}
