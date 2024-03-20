import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react';
import Section, { type SectionProps } from '../Section';
import data from '../../data';
import {
  cleanUrl,
  ensureAbsoluteUrl,
  extractGithubUsername,
} from '../../utils';
import { ICON_SIZE } from '../../constants';

export default function ContactInfo(props: SectionProps) {
  const { phoneNumber, email, linkedin, github, website } = data;

  return (
    <Section {...props}>
      <div className="grid grid-cols-2 gap-4">
        {!!phoneNumber && (
          <div className="flex gap-2 items-center">
            <Phone size={ICON_SIZE} weight="fill" />
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        )}
        {!!email && (
          <div className="flex gap-2 items-center">
            <PaperPlaneTilt size={ICON_SIZE} weight="fill" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
        {!!linkedin && (
          <div className="flex gap-2 items-center">
            <LinkedinLogo size={ICON_SIZE} weight="fill" />
            <a href={ensureAbsoluteUrl(linkedin)}>{cleanUrl(linkedin)}</a>
          </div>
        )}
        {!!github && (
          <div className="flex gap-2 items-center">
            <GithubLogo size={ICON_SIZE} weight="fill" />
            <a href={ensureAbsoluteUrl(github)}>
              {extractGithubUsername(github)}
            </a>
          </div>
        )}
        {!!website && (
          <div className="flex gap-2 items-center">
            <Globe size={ICON_SIZE} />
            <a href={ensureAbsoluteUrl(website)}>{website.split('//')[1]}</a>
          </div>
        )}
      </div>
    </Section>
  );
}
