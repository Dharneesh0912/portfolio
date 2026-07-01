// src/components/sections/About.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Brain, Cloud } from 'lucide-react';

const expertiseData = [
  {
    icon: <Code2 size={28} />,
    title: 'Full Stack Development',
    description: 'Building responsive and interactive web applications using React, Next.js, and Node.js.',
  },
  {
    icon: <Server size={28} />,
    title: 'Backend & APIs',
    description: 'Developing secure REST APIs, server-side applications, and database integrations with scalable architectures.',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent applications using NLP, Generative AI, LLMs, and data-driven solutions.',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications using Docker, CI/CD pipelines, and cloud platforms.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-black/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted text-center mb-12 leading-relaxed">
            Hi, my name is <span className="text-white font-semibold">Dharneesh R</span>, I am an enthusiastic Computer Science graduate with a strong foundation in Java, Data Structures & Algorithms, and modern web technologies. I am passionate about developing impactful software solutions and continuously enhancing my technical expertise through hands-on projects and coding challenges. I enjoy solving complex problems, learning new technologies, and collaborating with teams to build scalable and user-focused applications. My curiosity, dedication, and growth mindset motivate me to deliver high-quality solutions while adapting quickly to new challenges. I am actively seeking a Software Developer role where I can contribute my technical skills, learn from industry experts, and grow into a highly skilled software engineer while creating meaningful products that make a difference.
          </p>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Expertise</h3>
            <p className="text-muted text-lg">
              Combining full-stack development, artificial intelligence, and cloud technologies 
              to create impactful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-hover p-6 rounded-2xl group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}