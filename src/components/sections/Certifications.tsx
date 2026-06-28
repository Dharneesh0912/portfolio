// src/components/sections/Certifications.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy, BookOpen, Code2, Briefcase } from 'lucide-react';

// Education Data
const educationData = [
  {
    type: 'education',
    icon: <GraduationCap className="text-accent" size={24} />,
    title: 'B.E. - Artificial Intelligence & Data Science',
    institution: 'Dr. NGP Institute of Technology, Coimbatore',
    period: '2023 - 2027',
    details: 'CGPA: 8.0 / 10.0',
  },
  {
    type: 'education',
    icon: <BookOpen className="text-accent" size={24} />,
    title: 'Higher Secondary (HSSLC)',
    institution: 'Bharathi School',
    period: '2023',
    details: 'Cutoff: 164.5 / 200',
  },
];

// Internship Data
const internshipData = [
  {
    icon: <Briefcase className="text-accent" size={24} />,
    title: 'Data Analyst Intern',
    company: 'I-BACUS TECH, Coimbatore',
    period: 'Jun 2024',
    description: 'Created interactive Power BI dashboards and reports to visualize data and support business decision-making. Performed data cleaning, transformation, and analysis using Excel, improving reporting accuracy and analytical efficiency.',
  },
];

// Certifications Data
const certificationsData = [
  {
    name: 'NPTEL - Design & Implementation of Human-Computer Interfaces',
    issuer: 'IIT Madras',
    id: 'NPTEL-HCI',
  },
  {
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    id: 'Deloitte-DA',
  },
];

// Achievements Data
const achievementsData = [
  {
    icon: <Trophy className="text-yellow-500" size={24} />,
    title: '1st Place - Code Debugging Competition',
    event: 'SNS College, Coimbatore',
    year: '2026',
  },
  {
    icon: <Code2 className="text-accent" size={24} />,
    title: 'Hackathon Participant - Skill Sync Analyser',
    event: 'KPR Institute of Engineering & Technology',
    year: 'Sep 2025',
  },
  {
    icon: <Award className="text-purple-500" size={24} />,
    title: 'Honors Course - Blockchain Technology',
    event: 'Blockchain Fundamentals, Smart Contracts, Distributed Ledger, Decentralized Applications',
    year: '2025-2026',
  },
];

export default function Certifications() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding bg-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Education & Achievements</span>
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
            My academic journey, certifications, and accomplishments.
          </p>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <span className="border-b-2 border-accent pb-2">Education</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-hover p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{edu.title}</h4>
                      <p className="text-accent text-sm font-medium">{edu.institution}</p>
                      <p className="text-muted text-sm mt-1">{edu.period}</p>
                      <p className="text-muted text-sm mt-1">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internship Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <span className="border-b-2 border-accent pb-2">Internship</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              {internshipData.map((internship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-hover p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      {internship.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{internship.title}</h4>
                      <p className="text-accent text-sm font-medium">{internship.company}</p>
                      <p className="text-muted text-sm mt-1">{internship.period}</p>
                      <p className="text-muted text-sm mt-2 leading-relaxed">{internship.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section - Centered */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <span className="border-b-2 border-accent pb-2">Certifications</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative h-52 w-72 perspective-1000 cursor-pointer"
                  onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                  onMouseLeave={() => setFlippedIndex(null)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                      flippedIndex === index ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full glass rounded-xl p-6 backface-hidden flex flex-col items-center justify-center text-center">
                      <Award className="text-accent mb-3" size={32} />
                      <h3 className="text-sm font-semibold text-white line-clamp-3 px-2">{cert.name}</h3>
                      <p className="text-xs text-muted mt-2">{cert.issuer}</p>
                      <span className="text-xs text-accent/50 mt-2">{cert.id}</span>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full glass rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                        <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-white">Verified</p>
                      <p className="text-xs text-muted mt-1">Click to flip back</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              <span className="border-b-2 border-accent pb-2">Achievements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {achievementsData.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-hover p-6 rounded-2xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-accent text-sm font-medium">{achievement.event}</p>
                  <p className="text-muted text-sm mt-1">{achievement.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}