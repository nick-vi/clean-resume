# Clean Resume

This is a straightforward Preact-based web application designed for creating a personal resume. Simply edit the data.ts file with your information, and then you can print it, save it as a PDF, or host it online.

![example](./example.png)

## Getting Started

### Installation

```bash
git clone https://github.com/nick-vi/clean-resume.git
cd clean-resume
npm install
```

### How to Fill the ResumeData Object

To create your resume, you will need to fill in the data.ts file with your personal information. Below is a guide on what each property in the ResumeData type represents and how you should fill them:

> Dates Handling: Dates are parsed using language processing (NLP), so you can enter them in any format you prefer, such as 'May 2020', 'last year', or 'Spring 2014', and they don't need to be consistent.

- fullName (required): Your full name.
- title: Your professional title or job position.
- phoneNumber: Your contact phone number.
- email: Your email address.
- linkedin: Your LinkedIn profile URL (e.g., linkedin.com/in/yourname).
- github: Your GitHub profile URL (e.g., github.com/yourusername).
- website: Your personal or professional website URL.
- aboutMe: A brief introduction or summary about yourself. You can use Markdown for formatting.
- skills: An array of your skills. Each skill can be a simple string (e.g., "JavaScript") or a CategorizedSkills object with a name for the skill category and an items array containing specific skills within that category.

```typescript
skills: [
  'JavaScript',
  { name: 'Frontend Development', items: ['React', 'CSS', 'HTML'] },
];
```

- languages: An array of languages you know, along with your proficiency level in each (e.g., "Fluent", "Intermediate").

```typescript
languages: [
  { language: 'English', proficiency: 'Native' },
  { language: 'Spanish', proficiency: 'Intermediate' },
];
```

- projects: An array of projects you have worked on. Include the project name, a brief description, optional live URL, the techStack used, and a source array with URLs to the source code.

```typescript
projects: [
  {
    name: 'Personal Website',
    description: 'My personal portfolio and blog.',
    live: 'https://mywebsite.com',
    techStack: ['React', 'Node.js'],
    source: [
      { type: 'client', url: 'https://github.com/yourusername/website' },
    ],
  },
];
```

- experience (required): An array of your work experiences. For each experience, include the company, position, startDate, endDate (or "Present" if you're currently working there), and a brief description of your role and achievements.

```typescript
experience: [
  {
    company: 'Tech Company',
    position: 'Software Engineer',
    startDate: 'June 2015',
    endDate: 'Present',
    description:
      'Working on various client projects using modern web technologies.',
  },
];
```

- education (required): An array of your educational background. Include the institution, degree, startDate, and endDate for each entry.

```typescript
education: [
  {
    institution: 'University of Somewhere',
    degree: 'Bachelor of Science in Computer Science',
    startDate: 'September 2010',
    endDate: 'June 2014',
  },
];
```

### Run the Development Server

Start the development server to view your resume in a web browser:

```
npm run dev
```

### Print Your Resume

Once satisfied with your resume in the browser, print it directly or save it as a PDF.

### Hosting Your Resume Online (Optional)

You can make your resume easily accessible by hosting it online with free solutions like GitHub Pages, or other popular services like Netlify or Vercel.
