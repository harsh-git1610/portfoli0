import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Deloitte',
    position: 'Incoming Summer Intern - Technology & Transformation',
    location: 'Delhi, India',
    image: '/assets/logo.png',
    description: [
      'Incoming summer intern in the Digital Privacy & Trust department of the Technology & Transformation function.',
      'Selected to join the Delhi office for the summer 2026 cohort.'
    ],
    startDate: 'June 2026',
    endDate: 'August 2026',
    technologies: [],
    website: 'https://www2.deloitte.com/',
  },
  {
    isCurrent: true,
    company: 'Vesta',
    position: 'AI Engineer Intern',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      'Developing production features across 4 core modules of an airport operations SaaS platform deployed at 5+ live locations including IGI, Goa International, and Hyderabad’s RGIA (under GMR & Adani) — processing 2.5M+ tasks and saving 32,000+ man-hours/year.',
      'Built and optimized full-stack features using React, Next.js, Node.js, Express, and MongoDB, implementing RESTful API integrations to support real-time task assignment, status tracking, and incident reporting for on-ground airport teams.',
      'Engineered analytics and KPI dashboard modules surfacing live operational metrics to airport management, driving a 35% increase in operational efficiency — validated by the Head of Estate Management at IGI Airport.',
      'Contributed to the e-Deployments & Biometric Attendance pipeline, digitizing vendor billing workflows and reducing miscommunication errors by 95% across multi-vendor airport contracts.',
    ],
    startDate: 'March 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
    ],
    website: 'https://teamvesta.com',
  },
];
