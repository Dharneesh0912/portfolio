// src/components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Brain, Cloud, Database, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="text-accent" size={24} />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="text-accent" size={24} />,
    skills: ['Node.js', 'Python', 'Java', 'REST APIs', 'Microservices'],
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="text-accent" size={24} />,
    skills: ['TensorFlow', 'PyTorch', 'NLP', 'LLMs', 'Computer Vision'],
  },
  {
    title: 'Databases',
    icon: <Database className="text-accent" size={24} />,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="text-accent" size={24} />,
    skills: ['Docker', 'Git/GitHub', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    title: 'Analytics & BI',
    icon: <Layers className="text-accent" size={24} />,
    skills: ['Power BI', 'Excel', 'Data Visualization', 'SQL Analytics'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Technical Stack</span>
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
            Full-stack expertise across modern development, AI, and cloud infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-hover p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted hover:bg-white/20 hover:text-white transition-all duration-300"
                    >
                      {skill}
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