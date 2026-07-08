'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={experience.company} className="border-b-0">
        <AccordionTrigger className="hover:no-underline py-2">
          {/* Company Header */}
          <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between pr-4">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <h3
                    className={cn(
                      'text-lg font-bold',
                      experience.isBlur ? 'blur-[5px]' : 'blur-none',
                    )}
                  >
                    {experience.company}
                  </h3>
                  {experience.website && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.website}
                          target="_blank"
                          className="size-4 text-neutral-500 hover:text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Website />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Visit Website</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.x && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.x}
                          target="_blank"
                          className="size-4 text-neutral-500 hover:text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <X />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Follow on X</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.linkedin}
                          target="_blank"
                          className="size-4 text-neutral-500 hover:text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedIn />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Connect on LinkedIn</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.github}
                          target="_blank"
                          className="size-4 text-neutral-500 hover:text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>View GitHub</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.isCurrent && (
                    <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs text-green-700 dark:text-green-400">
                      <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                      Working
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">{experience.position}</p>
              </div>
            </div>
            {/* Right Side */}
            <div className="text-muted-foreground flex flex-col items-start md:items-end">
              <p>
                {experience.startDate} -{' '}
                {experience.isCurrent ? 'Present' : experience.endDate}
              </p>
              <p>{experience.location}</p>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="pt-4 pb-2">
          <div className="flex flex-col gap-6 text-left">
            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div>
                <h4 className="text-md mb-3 font-semibold">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, techIndex: number) => (
                    <Skill
                      key={techIndex}
                      name={technology.name}
                      href={technology.href}
                    >
                      {technology.icon}
                    </Skill>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h4 className="text-md mb-1 font-semibold">What I've done</h4>
              <div className="text-muted-foreground flex flex-col gap-2">
                {experience.description.map(
                  (description: string, descIndex: number) => (
                    <p
                      key={descIndex}
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: `• ${parseDescription(description)}`,
                      }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
