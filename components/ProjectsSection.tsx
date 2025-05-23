"use client";

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiEye } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  previewLink?: string;
  githubLink?: string;
  techStack?: string[];
}

const ProjectCard: FC<ProjectInterface> = ({
  title,
  description,
  image,
  previewLink,
  githubLink,
  techStack,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col justify-between overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 bg-white dark:bg-neutral-900">
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex-grow space-y-2 p-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {techStack && techStack.length > 0 && (
            <div>
              <h4 className="text-sm mt-4 font-medium text-muted-foreground">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-3 px-4 pb-4">
          {previewLink && (
            <Link
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90"
            >
              Live Demo <HiEye className="text-lg" />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-input px-4 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              GitHub <FaGithub className="text-lg" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects: ProjectInterface[] = [
    {
      id: 1,
      title: 'Task Manager App',
      description: 'Helps users manage tasks, deadlines, and productivity.',
      image: '/1.png',
      previewLink: 'https://your-link',
      githubLink: 'https://github.com',
      techStack: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'AWS'],
    },
    {
      id: 2,
      title: 'Real-Time Chat',
      description: 'A chat app with WebSocket-powered real-time communication.',
      image: '/2.jpg',
      githubLink: 'https://github.com/chhatraraj/chat-app',
      techStack: ['Vue', 'Firebase', 'Tailwind'],
    },
    {
      id: 3,
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for managing products and orders.',
      image: '/3.jpg',
      previewLink: 'https://ecommerce-dashboard.vercel.app',
      techStack: ['Angular', 'NestJS', 'MongoDB'],
    },
  ];

  return (
    <section id="projects" className="w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-4xl font-bold tracking-tight">✨ Featured Projects</h2>
          <p className="text-gray-300 text-lg">
            A selection of projects that highlight my development skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 