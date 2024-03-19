import Section from './Section';
import { GithubLogo, Link } from '@phosphor-icons/react';
import { ICON_SIZE } from '../app';
import data from '../data';
import ReactMarkdown from 'react-markdown';

export default function Projects() {
  const { projects } = data;

  if (!projects || projects.length === 0) return null;

  return (
    <Section title="Projects">
      <div className="flex gap-4">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.name}
            className="space-y-2 border-r border-gray-300 last:border-0 pr-4 last:pr-0 w-1/2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{project.name}</h3>
              {project.live && (
                <a
                  href={project.live}
                  className="flex gap-2 items-center font-medium"
                >
                  Try it out!
                  <Link size={ICON_SIZE * 0.75} />
                </a>
              )}
            </div>
            <ReactMarkdown>{project.description}</ReactMarkdown>
            {project.source.length > 0 && (
              <div className="flex gap-2">
                {project.source.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    className="flex gap-1 font-medium items-center"
                  >
                    <GithubLogo size={ICON_SIZE * 0.75} />
                    <span>
                      {source.type === 'mono'
                        ? 'Source'
                        : `Source (${
                            source.type.charAt(0).toUpperCase() +
                            source.type.slice(1)
                          })`}
                    </span>
                  </a>
                ))}
              </div>
            )}
            {project.techStack.length > 0 && (
              <div class="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-2xs border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
