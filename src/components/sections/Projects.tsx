// src/components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Custom GitHub SVG icon
const GitHubIcon = ({ size = 18 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projectsData = [
  {
    title: 'AI News Summarizer',
    description: 'AI-powered platform using PERT algorithm and NLP to generate concise news summaries with podcast functionality.',
    tech: ['React.js', 'Node.js', 'NLP', 'PERT'],
    github: 'https://github.com/Dharneesh0912',
    link: '#',
    featured: true,
  },
  {
    title: 'Skill Sync Analyzer',
    description: 'NLP-based resume screening system that extracts and matches candidate skills with job requirements.',
    tech: ['Python', 'NLP', 'React.js', 'Quiz System'],
    github: 'https://github.com/Dharneesh0912',
    link: '#',
    featured: true,
  },
  {
    title: 'Synthetic Biometric Voting System',
    description: 'Secure online voting platform with fingerprint authentication for one-person-one-vote integrity.',
    tech: ['React.js', 'Node.js', 'Biometric Auth', 'Real-time Tracking'],
    github: 'https://github.com/Dharneesh0912',
    link: '#',
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
            Projects that define my journey as an AI & Full Stack Developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-hover rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.tech[0] || 'Featured'}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors"
                    >
                      <GitHubIcon size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm flex-grow mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs text-muted bg-white/5 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}