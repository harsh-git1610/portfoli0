import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Finvio',
    description:
      'AI Powered Invoicing and Analytics System with real-time analytics queries and automated extraction.',
    image: '/project/finvio.png',
    link: '#',
    live: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    details: true,
    projectDetailsPageSlug: '/projects/finvio',
    isWorking: false,
  },
  {
    title: 'Inscribe',
    description:
      'AI Powered README Generator that streams responses via a Next.js serverless endpoint.',
    image: '/project/inscribe.png',
    link: '#',
    live: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    details: true,
    projectDetailsPageSlug: '/projects/inscribe',
    isWorking: true,
  },
  {
    title: 'Rewear',
    description:
      'Sustainable Fashion Exchange Platform with dual trading systems to extend garment lifecycles.',
    image: '/project/rewear.png',
    link: '#',
    live: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    details: true,
    projectDetailsPageSlug: '/projects/rewear',
    isWorking: true,
  },
];
