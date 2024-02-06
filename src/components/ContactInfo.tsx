import { ICON_SIZE } from '../app';
import resumeData from '../data.json';
import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react';
import Section, { type SectionProps } from './Section';

export default function ContactInfo(props: SectionProps) {
  const { phoneNumber, email, linkedin, github, website } = resumeData;

  return (
    <Section {...props}>
      <div className="grid grid-cols-2 gap-4">
        {phoneNumber && (
          <div className="flex gap-2 items-center">
            <Phone size={ICON_SIZE} weight="fill" />
            <a href={`tel:${resumeData.phoneNumber}`}>
              {resumeData.phoneNumber}
            </a>
          </div>
        )}
        {email && (
          <div className="flex gap-2 items-center">
            <PaperPlaneTilt size={ICON_SIZE} weight="fill" />
            <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
          </div>
        )}
        {linkedin && (
          <div className="flex gap-2 items-center">
            <LinkedinLogo size={ICON_SIZE} weight="fill" />
            <a href={resumeData.linkedin}>
              {resumeData.linkedin.split('www.')[1]}
            </a>
          </div>
        )}
        {github && (
          <div className="flex gap-2 items-center">
            <GithubLogo size={ICON_SIZE} weight="fill" />
            <a href={resumeData.github}>{resumeData.github.split('//')[1]}</a>
          </div>
        )}
        {website && (
          <div className="flex gap-2 items-center">
            <Globe size={ICON_SIZE} />
            <a href={resumeData.website}>{resumeData.website.split('//')[1]}</a>
          </div>
        )}
      </div>
    </Section>
  );
}
