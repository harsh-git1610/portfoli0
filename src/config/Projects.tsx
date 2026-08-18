import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Gemini from '@/components/technologies/Gemini';
import { Project } from '@/types/project';

export const projects: Project[] = [
  
  {
    title: 'Finvio',
    description:
      'AI Powered Invoicing and Analytics System with real-time analytics queries and automated extraction.',
    image: '/project/finvio.png',
    link: 'https://fin-vio.vercel.app/',
    live: 'https://fin-vio.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    details: true,
    projectDetailsPageSlug: '/projects/finvio',
    isWorking: true,
  },
  {
    title: 'Earnings AI',
    description:
      'Institutional-grade equity research tool that extracts financial statements to Excel and summarizes earnings calls using Google Gemini.',
    image: '/project/analytics-tool.png',
    link: 'https://analytics-tool-six.vercel.app/',
    live: 'https://analytics-tool-six.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Gemini', icon: <Gemini key="gemini" /> },
    ],
    details: true,
    projectDetailsPageSlug: '/projects/analytics-tool',
    isWorking: true,
  },
  {
    title: 'Inscribe',
    description:
      'AI Powered README Generator that streams responses via a Next.js serverless endpoint.',
    image: '/project/inscribe.png',
    link: 'https://insscribeai.vercel.app/',
    live: 'https://insscribeai.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> }
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
    link: 'https://rewear-fashion.vercel.app/',
    live: 'https://rewear-fashion.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> }
    ],
    details: true,
    projectDetailsPageSlug: '/projects/rewear',
    isWorking: true,
  },

  
];
