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
    isCurrent: true,
    company: 'Deloitte',
    position: 'Summer Intern - Technology & Transformation',
    location: 'Delhi, India',
    image: '/assets/logo.png',
    description: [
      'Contributing to the DFA Command Center on Deloitte’s internal GenW.AI platform — a multi-step AI workflow automation tool designed to streamline consultant-facing operational processes.',
      'Building UI components and data-bound widgets using Appsmith, implementing workflow state management and dynamic data rendering to support end-to-end process automation across internal teams.'
    ],
    startDate: 'June 2026',
    endDate: 'Present',
    technologies: [],
    website: 'https://www2.deloitte.com/',
  },
  {
    isCurrent: false,
    company: 'Vesta',
    position: 'AI Engineer Intern',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      '*LLM Query Engine:* Built a React/TypeScript chat interface enabling non-technical users to retrieve analytics via natural language, reducing query time from 2 mins to <3 seconds.',
      '*Secure Query Routing:* Designed SmartQueryRouter in Laravel/PHP to translate LLM intents into RBAC-scoped ORM queries, eliminating SQL injection risks and hallucinations across 50+ orgs.',
      '*Automated Reporting:* Engineered a pipeline converting parsed parameters into PDF, XLSX, and PPTX deliverables, saving management 15+ hrs/week.',
      '*Context Injection:* Improved domain-specific intent classification accuracy to 95%+ by injecting scoped organizational schemas into LLM prompts.',
      '*Frontend & Reliability:* Developed a responsive frontend for real-time AI streaming, and cut backend latency by 90% and API spend by 25% using a fast-path router for common queries.',
    ],
    startDate: 'March 2026',
    endDate: 'June 2026',
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
