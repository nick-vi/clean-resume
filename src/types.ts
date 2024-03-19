export type CategorizedSkills = { name: string; items: string[] };
type Skill = string | CategorizedSkills;
type SourceType = 'client' | 'backend' | 'mono';
type Source = { type: SourceType; url: string };
type Language = { language: string; proficiency: string };
type Project = {
  name: string;
  description: string;
  live?: string;
  techStack: string[];
  source: Source[];
};
type Experience = {
  company: string;
  position: string;
  startDate: string | Date;
  endDate: string | Date | undefined;
  description: string;
};
type Education = {
  institution: string;
  degree: string;
  startDate: string | Date;
  endDate: string | Date | undefined;
};
export interface ResumeData {
  fullName: string;
  title?: string;
  phoneNumber?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  aboutMe?: string;
  skills?: Skill[];
  languages?: Language[];
  projects?: Project[];
  experience?: Experience[];
  education?: Education[];
}
