import { type ResumeData } from './types';

const data: ResumeData = {
  fullName: 'Peter Griffin',
  title: 'Safety Inspector & Part-time Developer',
  phoneNumber: '555-0123',
  email: 'peter.griffin@aol.com', // Using an old email domain
  linkedin: 'linkedin.com/in/petergriffin',
  github: 'github.com/petergriffin',
  website: 'https://petergriffin.com',
  aboutMe:
    'Experienced safety inspector and part-time app developer with a knack for finding myself in bizarre and often ridiculous situations.',
  skills: [
    'Public Speaking',
    'Problem Solving',
    { name: 'Technical', items: ['Safety Inspections', 'App Development'] },
    { name: 'Creative', items: ['Singing', 'Dancing', 'Prank Planning'] },
  ],
  languages: [{ language: 'English', proficiency: 'Native' }],
  projects: [
    {
      name: 'Chicken Fight Simulator',
      description:
        'Developed an interactive game app that simulates epic battles with the Giant Chicken, featuring various levels and challenges.',
      techStack: ['Unity', 'C#'],
      source: [
        { type: 'client', url: 'github.com/petergriffin/chicken-fight' },
      ],
    },
    {
      name: 'Quahog Map App',
      description:
        'Created a navigation app for Quahog, helping locals and tourists find the best spots in town, including secret locations known only to Peter.',
      techStack: ['JavaScript', 'React Native'],
      source: [{ type: 'client', url: 'github.com/petergriffin/quahog-map' }],
    },
  ],
  experience: [
    {
      company: 'Pawtucket Brewery',
      position: 'Safety Inspector',
      startDate: 'January 2000',
      endDate: 'Present',
      description:
        'Ensuring the safety and compliance of brewery operations, often leading to unexpected adventures.',
    },
    {
      company: 'Quahog Fisherman',
      position: 'Fisherman',
      startDate: 'May 1995',
      endDate: 'December 1999',
      description:
        'Worked as a fisherman, engaging in various maritime activities.',
    },
  ],
  education: [
    {
      institution: 'Buddy Cianci Junior High School',
      degree: 'High School Diploma',
      startDate: 'September 1980',
      endDate: 'June 1984',
    },
  ],
};

export default data;
